import React, { useEffect, useState } from 'react';
import './MoviesPage.css';
import Movies from '../../components/Movies/Movies';
import MovieForm from '../../components/Movies/MovieForm/MovieForm';
import type { IMovie } from '../../types';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const addMovie = (movie: IMovie): void => {
    setMovies((prevState) => [...prevState, movie]);
  };

  const onChangeNameMovie = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ): void => {
    setMovies((prevState) =>
      [...prevState].map((movie) =>
        movie.id === id ? { ...movie, name: event.target.value } : movie
      )
    );
  };

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies') || '[]');

    if (savedMovies.length > 0) {
      setMovies(savedMovies);
    }
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }

    if (movies.length === 0) {
      localStorage.removeItem("movies")
    }
  }, [movies]);

  const onDeleteMovie = (id: string): void => {
    setMovies((prevState) => [...prevState].filter((movie) => movie.id !== id));
    toast.error('Movie deleted!');
  };

  return (
    <div className="movies-page">
      <MovieForm addMovie={addMovie} />
      <Movies
        movies={movies}
        onChangeNameMovie={onChangeNameMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </div>
  );
};

export default MoviesPage;
