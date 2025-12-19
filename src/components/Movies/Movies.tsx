import React from 'react';
import './Movies.css';
import type { IMovie } from '../../types';
import MovieItem from './MovieItem/MovieItem';

interface IMoviesProps {
  movies: IMovie[];
  onChangeNameMovie: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  onDeleteMovie: (id: string) => void;
}

const Movies: React.FC<IMoviesProps> = ({
  movies,
  onChangeNameMovie,
  onDeleteMovie,
}) => {
  let movieItems: React.ReactNode = null;

  if (movies.length === 0) {
    movieItems = (
      <>
        <p className='empty-message'>No movies found</p>
      </>
    );
  } else {
    movieItems = (
      <>
        {movies.map((movie) => (
          <MovieItem
            movie={movie}
            key={movie.id}
            onChangeNameMovie={onChangeNameMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </>
    );
  }

  return (
    <div className="movies">
      <h2 className="movies-card-title">Movies</h2>
      <div className="movies-block">
        <div className="movies-card">{movieItems}</div>
      </div>
    </div>
  );
};

export default Movies;
