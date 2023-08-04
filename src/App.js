import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import WordCard from './components/WordCard';
import Scores from './components/Scores';
import RandomWord from './components/RandomWord';
import { switchDay, incrementPlayer } from './features/gameStateSlice';
import DefinitionInput from './components/DefinitionInput';
const { Rune } = window;

function App() {
  const [gameState, setGameState] = useState({});
  const [players, setPlayers] = useState({});
  const [scores, setScores] = useState({});
  const [index, setIndex] = useState();
  const [currentPlayerId, setCurrentPlayerId] = useState("")
  useEffect(() => {
    import('./logic').then(() =>
      Rune.initClient({
        onChange: (runeState) => {
          // { newGame, players, yourPlayerId, action, event }
          setGameState({ ...runeState });
          setPlayers({ ...runeState.players });
          setScores({ ...runeState.newGame.scores });
          setIndex(runeState.newGame.index);
          setCurrentPlayerId(runeState.yourPlayerId)
          console.log(runeState.newGame.definitions)
        },
      })
    );
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fauxtionary</h1>
        <div>
          <Scores players={players} scores={scores} />
          <RandomWord gameState={gameState} index={index} />
          <DefinitionInput currentPlayerId={currentPlayerId}/>
        </div>
      </header>
    </div>
  );
}

export default App;
