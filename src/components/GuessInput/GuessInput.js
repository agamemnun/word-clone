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
    if (guessInput.length !== 5)
      return;

    handleAddGuess(guessInput);
    setGuessInput('');
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        type="text"
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guessInput}
        onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
        disabled={disabled}
      />
      <Keyboard keys={keys} disabled={disabled} handleKeyDown={handleKeyDown} handleEnter={handleEnter} handleBackspace={handleBackspace} />
    </form>
  );
}

export default GuessInput;
