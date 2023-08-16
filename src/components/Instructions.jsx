import React from 'react';
const { Rune } = window;

function Instructions({ currentPlayerId }) {
  function handleEnterGame() {
    Rune.actions.assignRoles();
    Rune.actions.assignJudgeArray(currentPlayerId);
  }

  return (
    <div>
      <p>INSERT INSTRUCTIONS HERE</p>
      <button onClick={handleEnterGame}>Enter Game</button>
    </div>
  );
}

export default Instructions;
