import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import WordCard from './components/WordCard';
import Scores from './components/Scores';
import { switchDay, incrementPlayer } from './features/gameStateSlice';
const { Rune } = window;

function App() {
  const [gameState, setGameState] = useState({});
  const [players, setPlayers] = useState({});
  const [scores, setScores] = useState({});
  // console.log(window);
  useEffect(() => {
    import('./logic').then(() =>
      Rune.initClient({
        onChange: (runeState) => {
          // { newGame, players, yourPlayerId, action, event }
          setGameState({ ...runeState });
          setPlayers({ ...runeState.players });
          setScores({ ...runeState.newGame.scores });
        },
      })
    );
  }, []);
  // console.log(gameState);
  console.log(`players`, players);
  console.log(`scores`, scores);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fauxtionary</h1>
        <div>
          <Scores players={players} scores={scores} />
        </div>
      </header>
    </div>
  );
}

export default App;
