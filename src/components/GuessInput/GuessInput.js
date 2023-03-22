import React from "react";
import Keyboard from '../Keyboard';

function GuessInput({ keys, disabled, handleAddGuess }) {
  const [guessInput, setGuessInput] = React.useState('');

  const handleSubmit = function (event) {
    event.preventDefault();

    handleAddGuess(guessInput);
    setGuessInput('');
  }

  const handleKeyDown = function (keyInput) {
    const nextGuess = guessInput + keyInput;
    if (nextGuess.length > 5)
      return;

    setGuessInput(guessInput + keyInput)
  }

  const handleBackspace = function () {
    setGuessInput(guessInput.substring(0, guessInput.length - 1));
  }

  const handleEnter = function () {
    if (guessInput.length !== 5) {
      alert('Guessed word can not be shorther / longer than 5 letters.');
      return;
    }

    handleAddGuess(guessInput);
    setGuessInput('');
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        pattern="[A-Z]{5}"
        value={guessInput}
        onChange={(event) => setGuessInput(event.target.value)}
        disabled={disabled}
      />
      <Keyboard keys={keys} disabled={disabled} handleKeyDown={handleKeyDown} handleEnter={handleEnter} handleBackspace={handleBackspace} />
    </form>
  );
}

export default GuessInput;
