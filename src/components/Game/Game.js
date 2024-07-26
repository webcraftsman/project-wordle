import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import EndGame from '../EndGame';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');
  let numGuesses = guesses.length + 1;


  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    const guessInput = document.querySelector('#guess-input');

    if (tentativeGuess === answer) {
      setStatus('won');
      guessInput.setAttribute('disabled', '');
    }


    if (numGuesses == NUM_OF_GUESSES_ALLOWED && status === 'running') {
      setStatus('lost');
      guessInput.setAttribute('disabled','');
    }
  }

  return <>
    <GuessResults guesses={guesses} answer={answer} status={status} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} />
    <EndGame status={status} guesses={guesses} answer={answer} />
  </>;
}

export default Game;
