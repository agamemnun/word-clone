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
    setGuessInput(guessInput + keyInput)
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
      <Keyboard keys={keys} disabled={disabled} handleKeyDown={handleKeyDown} />
    </form>
  );
}

export default GuessInput;
