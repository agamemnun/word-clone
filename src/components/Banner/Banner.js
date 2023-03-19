import React from "react";

import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Banner({ gameStatus, answer, guessCount }) {
  let banner;

  switch (gameStatus) {
    case 'WON':
      banner = <WonBanner guessCount={guessCount} />;
      break;
    case 'LOST':
      banner = <LostBanner answer={answer} />;
      break;
    default:
      banner = '';
      break;
  }

  return (<>{banner}</>);
}

export default Banner;
