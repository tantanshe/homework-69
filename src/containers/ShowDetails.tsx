import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {fetchShows} from '../store/showsSlice';
import Spinner from '../components/Spinner/Spinner';
import Search from '../components/Search';

const ShowDetails = () => {
  const {id} = useParams<{id}>();
  const dispatch = useAppDispatch();
  const {show, loading, error} = useAppSelector((state) => state.shows);

  useEffect(() => {
    if (id) {
      dispatch(fetchShows(id));
    }
  }, [id]);

  return (
    <div className="show-details-page">
      <Search/>
      {loading && <Spinner/>}
      {error && <div>Error loading data</div>}
      {show && (
        <div>
          <h1>{show.name}</h1>
          <img src={show.image.medium} alt={show.name}/>
          <div>Genres: {show.genres.join(', ')}</div>
          <div>{show.summary}</div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;