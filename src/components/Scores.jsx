import React, { useState, useEffect } from 'react';

function Scores({ players, scores }) {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    let playerInfoAndScore = {};
    const playerArr = [];
    for (let info in scores) {
      const currentPlayerInfo = players[info];
      //   currentPlayerInfo.currentScore = scores[info];
      playerInfoAndScore = { ...currentPlayerInfo, score: scores[info] };
      //   console.log(currentPlayerInfo);
      // console.log('playerInfoAndScore', playerInfoAndScore);
      playerArr.push(playerInfoAndScore);
    }
    setAllPlayers(playerArr);
  }, [scores]);

  function displayInfo() {
    return (
      <>
        {allPlayers.map((playerObj) => (
          <div key={`${playerObj.playerId}`}>
            {/* <img src={`${playerObj.avatarURL}`} alt='user-avatar' /> */}
            <p>
              {playerObj.displayName}: {playerObj.score}
            </p>
          </div>
        ))}
      </>
    );
  }

  console.log(allPlayers);
  return (
    <div>
      <h2>Current Scores</h2>
      {displayInfo()}
    </div>
  );
}

export default Scores;
