import React from "react";

function LostBanner({ answer, restartGame }) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <button className="restart" onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default LostBanner;
