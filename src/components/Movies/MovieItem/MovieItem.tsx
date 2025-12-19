import React from 'react';
import './MovieItem.css';
import type { IMovie } from '../../../types';
import Button from '../../../UI/Button/Button';

interface IMovieItemProps {
  movie: IMovie;
  onChangeNameMovie: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  onDeleteMovie: (id: string) => void;
}

const MovieItem: React.FC<IMovieItemProps> = React.memo(
  ({ movie, onChangeNameMovie, onDeleteMovie }) => {
    return (
      <>
        <div className="movie-item">
          <div className="input-movie-item-group">
            <label>
              <input
                type="text"
                value={movie.name}
                title="movie name"
                className="movie-item-input"
                onChange={(event) => onChangeNameMovie(event, movie.id)}
              />
            </label>
          </div>

          <Button
            text="Delete"
            className="delete-movie"
            onClick={() => onDeleteMovie(movie.id)}
            motionAnimation={{
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 },
            }}
          />
        </div>
      </>
    );
  },
  (prevState, nextState) => prevState.movie.name === nextState.movie.name
);

export default MovieItem;
