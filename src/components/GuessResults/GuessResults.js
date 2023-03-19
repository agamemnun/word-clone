import React from "react";

function GuessResults({ guessResults }) {
  return <div className="guess-results">
    {guessResults.map((guess) =>
      <p
        key={crypto.randomUUID()}
        className="guess">
        {guess.map((char, i) => <span key={i} className={`cell ${char.status}`}>{char.letter}</span>)}
      </p>)}
  </div>;
}

export default GuessResults;
