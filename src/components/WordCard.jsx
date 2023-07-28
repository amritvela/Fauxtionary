import { playersObject } from '../roleDescription';
import React from 'react';

const WordCard = (props) => {
  const { role } = props;
  const playerData = playersObject[role];
  console.log(playerData);
  return (
    <div className='player-card'>
      <h1>Role : {role}</h1>
      <img alt='player-avatar' src={playerData.picture} />
      <p>Description: {playerData.description}</p>
    </div>
  );
};

export default WordCard;
