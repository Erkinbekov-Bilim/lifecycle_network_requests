import React from 'react';
import './Jokes.css';
import type { IJoke } from '../../types';

interface IJokesProps {
  joke: IJoke;
}

const Jokes: React.FC<IJokesProps> = ({ joke }) => {
  return (
    <>
      <div className="joke">
        <p className="single-joke">{joke?.value}</p>
      </div>
    </>
  );
};

export default Jokes;
