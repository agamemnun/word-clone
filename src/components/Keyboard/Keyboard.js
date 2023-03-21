import React from "react";

import { KEYS_LAYOUT } from '../../constants';

function Keyboard({ keys, handleKeyDown }) {

  let keyRows = [[], [], []],
    rowIndex = 0,
    keyCountInRows = [...KEYS_LAYOUT],
    keysToPlaceCount = keyCountInRows.shift();

  Object.entries(keys).forEach(function ([letter, status]) {
    if (keysToPlaceCount === 0 && keyCountInRows.length > 0) {
      keysToPlaceCount = keyCountInRows.shift();
      rowIndex++;
    }

    const button = <button
      className={`key ${status}`}
      key={letter}
      type="button"
      onClick={(event) => {
        event.preventDefault();

        handleKeyDown(letter);
      }}
    >{letter}</button>;

    keyRows[rowIndex].push(button);

    keysToPlaceCount--;
  });

  return <>
    {keyRows.map((row, rowIndex) => {
      return <div key={rowIndex} className="row">{row.map((key) => {
        return key;
      })}</div>
    })}
  </>;
}

export default Keyboard;
