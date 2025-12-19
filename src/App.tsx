import { useState } from 'react';
import './App.css';
import MoviesPage from './containers/MoviesPage/MoviesPage';
import { ToastContainer } from 'react-toastify';
import Button from './UI/Button/Button';
import JokesPage from './containers/JokesPage/JokesPage';
import animationForButton from './constants/animations/animationForButton';

const App = () => {
  const [page, setPage] = useState<'movies' | 'jokes'>('movies');

  return (
    <>
      <ToastContainer />
      {page === 'movies' && (
        <div className='page'>
          <MoviesPage />
          <Button
            title="Jokes page"
            onClick={() => setPage('jokes')}
            className="router-button"
            text="jokes"
            motionAnimation={animationForButton}
          />
        </div>
      )}

      {page === 'jokes' && (
        <div className='page'>
          <JokesPage />
          <Button
            title="Movies page"
            onClick={() => setPage('movies')}
            className="router-button"
            text="movies"
            motionAnimation={animationForButton}
          />
        </div>
      )}
    </>
  );
};

export default App;
