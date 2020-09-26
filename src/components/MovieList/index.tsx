import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../reducers/movie';
// Components
import Card from './Card';
// Style
import s from './MovieList.module.css';

const MovieList = () => {
  const movieList = useSelector(selectors.getMovies);

  return (
    <section className={s.movieList}>
      <div className={s.wrapper}>
        {movieList &&
          movieList.map(({ Title, Year, Poster, imdbID, Type }) => (
            <Card key={imdbID} title={Title} year={Year} imdb={imdbID} type={Type} media={Poster} />
          ))}
      </div>
    </section>
  );
};

export default MovieList;
