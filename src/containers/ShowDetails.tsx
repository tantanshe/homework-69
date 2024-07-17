import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {fetchShows} from '../store/showsSlice';
import Spinner from '../components/Spinner/Spinner';
import Search from '../components/Search/Search';

const ShowDetails = () => {
  const {id} = useParams<{ id }>();
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
      <div className="container mt-2">
        {show && (
          <div className="d-flex mt-5">
            <div>
              <img src={show.image.original} alt={show.name} className="img-fluid rounded mb-3"/>
            </div>
            <div className="ms-5">
              <h1>{show.name}</h1>
              <div className="mb-3">Genres: {show.genres.join(', ')}</div>
              <div className="mb-3">{show.summary}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowDetails;