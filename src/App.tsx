import './App.css';
import MoviesPage from './containers/MoviesPage/MoviesPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer />
      <MoviesPage />
    </>
  );
};

export default App;
