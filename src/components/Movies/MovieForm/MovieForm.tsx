import React from 'react';
import './MovieForm.css';
import { useForm } from 'react-hook-form';
import type { IMovie, IMovieMutation } from '../../../types';
import generateID from '../../../utils/generateID';
import { toast } from 'react-toastify';
import Button from '../../../UI/Button/Button';

interface IMovieFormProps {
  addMovie: (movie: IMovie) => void;
}

const MovieForm: React.FC<IMovieFormProps> = ({ addMovie }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMovieMutation>({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (data: IMovieMutation): void => {
    addMovie({ ...data, id: generateID() });
    reset();
    toast.success('Movie added successfully!');
  };

  return (
    <div className="form-block">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="input-group">
            <label>
              <input
                type="text"
                id="name"
                className="movie-input"
                placeholder="Movie name"
                {...register('name', {
                  required: 'Name is required!',
                  minLength: {
                    value: 1,
                    message: 'Name must be at least 1 character!',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Name must be less than 20 characters!',
                  },
                })}
                name="name"
              />
            </label>
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="submit-button"
            title="Add Movie"
            text="Add"
            motionAnimation={{
              initial: {
                backgroundColor: 'rgb(233, 129, 247)',
                color: '#ffffff',
              },

              whileHover: {
                scale: 1.1,
                backgroundColor: '#ffffff',
                color: 'rgb(233, 129, 247)',
              },

              whileTap: {
                scale: 0.9,
              },
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
