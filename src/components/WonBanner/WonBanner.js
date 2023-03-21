import React from "react";

function WonBanner({ guessCount, restartGame }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong>{' '}Got it in{' '}
        <strong>{guessCount} guesses</strong>.
      </p>
      <button className="restart" onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default WonBanner;
