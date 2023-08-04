import React, { useEffect, useState } from 'react';
import Scores from './components/Scores';
import RandomWord from './components/RandomWord';
import DefinitionInput from './components/DefinitionInput';
import ShowDefinitions from './components/ShowDefinitions';
import '../src/stylesheets/app.scss'
const { Rune } = window;

function App() {
  const [gameState, setGameState] = useState({});
  const [players, setPlayers] = useState({});
  const [scores, setScores] = useState({});
  const [index, setIndex] = useState();
  const [currentPlayerId, setCurrentPlayerId] = useState("")
  const [definitionsObject, setDefinitionsObject] = useState({})
  useEffect(() => {
    import('./logic').then(() =>
      Rune.initClient({
        onChange: (runeState) => {
          // { newGame, players, yourPlayerId, action, event }
          console.log(runeState.newGame)
          setGameState({ ...runeState });
          setPlayers({ ...runeState.players });
          setScores({ ...runeState.newGame.scores });
          setIndex(runeState.newGame.index);
          setCurrentPlayerId(runeState.yourPlayerId)
          setDefinitionsObject({definitions: runeState.newGame.definitions, stateFlag: runeState.newGame.canShowDefinitions})
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
          <ShowDefinitions definitionsObject={definitionsObject} />
        </div>
      </header>
    </div>
  );
}

export default App;
