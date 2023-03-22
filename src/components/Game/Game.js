import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED, KEYS_ON_KEYBOARD } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';



function Game() {
  const [guessResults, setGuessResults] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(
      () => range(5).map(() => ({ letter: '', status: '' }))
    )
  );
  const [activeGuessIndex, setActiveGuessIndex] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('');
  const [keys, setKeys] = React.useState({ ...KEYS_ON_KEYBOARD });
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS)
  });

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const handleAddGuess = function (guess) {
    if (guess.length !== 5)
      return;

    const nextGuessResults = [...guessResults];
    const checkedGuess = checkGuess(guess, answer);

    nextGuessResults[activeGuessIndex] = checkedGuess;

    const nextActiveGuessIndex = activeGuessIndex + 1;
    setActiveGuessIndex(nextActiveGuessIndex);

    if (checkedGuess.every((char) => char.status === 'correct')) {
      setGameStatus('WON');
    } else if (nextActiveGuessIndex >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('LOST');
    }

    const nextKeys = { ...keys };

    checkedGuess.forEach(({ letter, status }) => {
      nextKeys[letter] = status;
    });

    setKeys(nextKeys);

    setGuessResults(nextGuessResults);
  }

  const restartGame = function () {
    setKeys({ ...KEYS_ON_KEYBOARD });
    setActiveGuessIndex(0);
    setAnswer(sample(WORDS));
    setGameStatus('');
    setGuessResults(
      range(NUM_OF_GUESSES_ALLOWED).map(
        () => range(5).map(() => ({ letter: '', status: '' }))
      )
    );
  }

  const gameEnded = gameStatus !== '';

  return <>
    <GuessResults guessResults={guessResults} />
    {gameEnded && <Banner gameStatus={gameStatus} answer={answer} guessCount={activeGuessIndex} restartGame={restartGame} />}
    <GuessInput keys={keys} disabled={gameEnded} handleAddGuess={handleAddGuess} />
  </>;
}

export default Game;
