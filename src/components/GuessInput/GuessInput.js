import React from "react";

function GuessInput({ disabled, handleAddGuess }) {
  const [guessInput, setGuessInput] = React.useState('');

  const handleSubmit = function (event) {
    event.preventDefault();

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
    </form>
  );
}

export default GuessInput;
