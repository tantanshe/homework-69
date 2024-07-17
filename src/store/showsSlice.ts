import {Show} from '../types';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface ShowState {
  show: Show | null;
  loading: boolean;
  error: boolean;
}

const initialState: ShowState = {
  show: null,
  loading: false,
  error: false,
};

export const fetchShows = createAsyncThunk('shows/fetchShowDetails', async (id) => {
    const response = await axios.get<Show>(`http://api.tvmaze.com/shows/${id}`);
    return response.data;
  }
);

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    emptyReducer: (state) => {
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state: ShowState) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchShows.fulfilled, (state: ShowState, action: PayloadAction<Show>) => {
        state.loading = false;
        state.show = action.payload;
      })
      .addCase(fetchShows.rejected, (state: ShowState) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default showsSlice.reducer;