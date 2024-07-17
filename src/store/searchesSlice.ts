import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {SearchApi} from '../types';

interface SearchState {
  input: string;
  searches: SearchApi[];
  loading: boolean;
  error: boolean;
}

const initialState: SearchState = {
  input: '',
  searches: [],
  loading: false,
  error: false,
};

export const fetchSearches = createAsyncThunk('searches/fetchSearches', async (input) => {
    const response = await axios.get<SearchApi>(`http://api.tvmaze.com/search/shows?q=${input}`);
    return response.data;
  }
);

export const searchesSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearches.pending, (state: SearchState) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchSearches.fulfilled, (state: SearchState, action: PayloadAction<SearchApi[]>) => {
        state.loading = false;
        state.searches = action.payload;
      })
      .addCase(fetchSearches.rejected, (state: SearchState) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {setInput} = searchesSlice.actions;

export default searchesSlice.reducer;