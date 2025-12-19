import React, { useEffect, useState } from 'react';
import './JokesPage.css';
import { API_URL } from '../../constants/api';
import Jokes from '../../components/Jokes/Jokes';
import type { IJoke } from '../../types';
import Button from '../../UI/Button/Button';
import animationForButton from '../../constants/animations/animationForButton';

const JokesPage = () => {
  const [joke, setJoke] = useState<IJoke>({} as IJoke);
  let isIgnore = false;

  const getJoke = async (isIgnore: boolean) => {
    try {
      const response = await fetch(API_URL);

      if (response.ok) {
        const data: IJoke = await response.json();
        if (!isIgnore) {
          setJoke(data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJoke(isIgnore);
    console.log('Hi');

    return () => {
      isIgnore = true;
    };
  }, []);

  return (
    <div className="joke-page">
      <Jokes joke={joke} />
      <Button
        text="New Joke"
        onClick={() => getJoke(!isIgnore)}
        className="new-joke"
        motionAnimation={animationForButton}
      />
    </div>
  );
};

export default JokesPage;
