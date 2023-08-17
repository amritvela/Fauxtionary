import React, { useEffect, useState } from 'react';
import Scores from './components/Scores';
import RandomWord from './components/RandomWord';
import DefinitionInput from './components/DefinitionInput';
import ShowDefinitions from './components/ShowDefinitions';
import Instructions from './components/Instructions';
import JudgeView from './components/JudgeView';
import '../src/stylesheets/app.scss';
const { Rune } = window;

function App() {
  const [gameState, setGameState] = useState({});
  const [players, setPlayers] = useState({});
  const [scores, setScores] = useState({});
  const [wordIndex, setWordIndex] = useState();
  const [currentPlayerId, setCurrentPlayerId] = useState('');
  const [definitionsObject, setDefinitionsObject] = useState({});

  const [judgeId, setJudgeId] = useState('');
  const [isJudge, setIsJudge] = useState(false);

  useEffect(() => {
    import('./logic').then(() =>
      Rune.initClient({
        onChange: (runeState) => {
          // { newGame, players, yourPlayerId, action, event }
          // console.log(runeState.newGame);
          // console.log('runeState.players', runeState.players);
          // console.log('judgeOrder', { ...runeState.newGame.judgeOrder });
          // console.log('currentJudge', runeState.newGame.currentJudge);
          setGameState({ ...runeState });
          setPlayers({ ...runeState.players });
          setScores({ ...runeState.newGame.scores });
          setWordIndex(runeState.newGame.wordIndex);
          setCurrentPlayerId(runeState.yourPlayerId);
          setDefinitionsObject({
            definitions: runeState.newGame.definitions,
            stateFlag: runeState.newGame.canShowDefinitions,
          });
          setJudgeId(runeState.newGame.currentJudge);
        },
      })
    );
  }, []);

  useEffect(() => {
    if (judgeId !== '' && judgeId === currentPlayerId) {
      setIsJudge(true);
    }
  }, [judgeId]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fauxtionary</h1>

        <div>
          <Instructions currentPlayerId={currentPlayerId} />
          <Scores players={players} scores={scores} />
          {isJudge ? <JudgeView/> : 
           <>
            <RandomWord gameState={gameState} wordIndex={wordIndex} />
            <DefinitionInput
            currentPlayerId={currentPlayerId}
            definitions={definitionsObject.definitions}
          />
          </>
          
          }
          <ShowDefinitions definitionsObject={definitionsObject} />
        </div>
      </header>
    </div>
  );
}

export default App;
