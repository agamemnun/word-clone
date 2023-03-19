import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(
      () => range(5).map(() => ({ letter: '', status: '' }))
    )
  );
  const [activeGuessIndex, setActiveGuessIndex] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('');


  const handleAddGuess = function (guess) {
    const nextGuessResults = [...guessResults];
    const checkedGuess = checkGuess(guess, answer);

    //nextGuessResults[activeGuessIndex] = [...guess].map((char) => ({ letter: char, status: '' }));
    nextGuessResults[activeGuessIndex] = checkedGuess;

    const nextActiveGuessIndex = activeGuessIndex + 1;
    setActiveGuessIndex(nextActiveGuessIndex);

    if (checkedGuess.every((char) => char.status === 'correct')) {
      setGameStatus('WON');
    } else if (nextActiveGuessIndex >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('LOST');
    }

    setGuessResults(nextGuessResults);
  }

  const gameEnded = gameStatus !== '';

  return <>
    <GuessResults guessResults={guessResults} />
    {gameEnded && <Banner gameStatus={gameStatus} answer={answer} guessCount={activeGuessIndex} />}
    <GuessInput disabled={gameEnded} handleAddGuess={handleAddGuess} />
  </>;
}

export default Game;
