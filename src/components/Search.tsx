import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {fetchSearches, setInput} from '../store/searchesSlice';
import {Link} from 'react-router-dom';
import Spinner from './Spinner/Spinner';

const Search = () => {
  const dispatch = useAppDispatch();
  const {input, searches, loading, error} = useAppSelector((state) => state.searches);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    dispatch(setInput(newInput));
    if (newInput.length > 0) {
      dispatch(fetchSearches(newInput));
    }
  };

  useEffect(() => {
    if (input.length > 0) {
      dispatch(fetchSearches(input));
    }
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type in the name of the show"
      />
      {loading && <Spinner/>}
      {error && <h2>Error loading data</h2>}
      {searches.length > 0 && (
        <div className="autocomplete-block">
          {searches.map((search) => (
            <Link to={`/shows/${search.show.id}`} key={search.show.id}>
              {search.show.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;