import React, { useEffect } from 'react';
import data from '../fakeWords.json';
const { Rune } = window;

export default function RandomWord({ gameState, index }) {
  //   console.log(`gamestate`, gameState.index);
  console.log(data.fake_words);
  useEffect(() => {}, [gameState]);
  function renderWord() {
    console.log(index);
    if (!index) {
      return (
        <div>
          <button
            onClick={() => {
              Rune.actions.generateWord();
            }}
          >
            Start Game
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>{data.fake_words[index]}</p>
        </div>
      );
    }
  }

  return (
    <>
      <div>{renderWord()}</div>
      {/* <button onClick={renderWord}>Start Game</button> */}
    </>
  );
}
