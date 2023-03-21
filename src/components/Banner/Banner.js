import React from "react";

import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Banner({ gameStatus, answer, guessCount, restartGame }) {
  let banner;

  switch (gameStatus) {
    case 'WON':
      banner = <WonBanner guessCount={guessCount} restartGame={restartGame} />;
      break;
    case 'LOST':
      banner = <LostBanner answer={answer} restartGame={restartGame} />;
      break;
    default:
      banner = '';
      break;
  }

  return (<>{banner}</>);
}

export default Banner;
