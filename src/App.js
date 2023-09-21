import React, { useEffect, useState } from 'react';
import PlayerView from './components/PlayerView';
import JudgeView from './components/JudgeView';
import '../src/stylesheets/app.scss';

import LandingPage from './components/LandingPage';
const { Rune } = window;

function App() {
  const [gameState, setGameState] = useState({});
  const [players, setPlayers] = useState({});
  const [scores, setScores] = useState({});
  const [wordIndex, setWordIndex] = useState();
  const [currentPlayerId, setCurrentPlayerId] = useState('');
  const [definitionsObject, setDefinitionsObject] = useState({});
  const [currentRoundWinner, setCurrentRoundWinner] = useState(null)
  const [judgeId, setJudgeId] = useState('');
  const [isJudge, setIsJudge] = useState(false);
  const [roundStage, setRoundStage] = useState('acceptingPlayers');
  const [roundNum, setRoundNum] = useState(null)
  useEffect(() => {
    import('./logic').then(() =>
      Rune.initClient({
        onChange: (runeState) => {
          setRoundStage(runeState.newGame.currentRoundStage);
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
          setCurrentRoundWinner(runeState.newGame.currentRoundWinner)
          setRoundNum(runeState.newGame.roundNum)
        },
      })
    );
  }, []);

  useEffect(() => {

    console.log({judgeId, currentPlayerId})
    if (judgeId !== '' && judgeId === currentPlayerId) {
      setIsJudge(true);
    } else {
      setIsJudge(false)
    }
  }, [judgeId, currentPlayerId]);

  /**
   * Once the roles are assigned, this function render sthe JudgeView and PlayerView
   */
  const RenderJudgeOrPlayerView = () => {
    if (isJudge) {
      return (
        <div className='flex-container'>
          <JudgeView
          players={players}
          scores={scores}
            isJudge={isJudge}
            gameState={gameState}
            wordIndex={wordIndex}
            roundStage={roundStage}
            definitionsObject={definitionsObject}
            definitions={definitionsObject.definitions}
            currentRoundWinner={currentRoundWinner}
            roundNum={roundNum}
          />
        </div>
      );
    } else {
      return (
        <div className='flex-container'>
          <PlayerView
          players={players}
          scores={scores}
            isJudge={isJudge}
            definitionsObject={definitionsObject}
            gameState={gameState}
            currentPlayerId={currentPlayerId}
            definitions={definitionsObject.definitions}
            roundStage={roundStage}
            wordIndex={wordIndex}
            currentRoundWinner={currentRoundWinner}
            roundNum={roundNum}
          />
        </div>
      );
    }
  };

  /**
   * This function renders views based on different stages of the game
   */
  const renderViews = () => {
    if (roundStage === 'acceptingPlayers') {
      return <LandingPage currentPlayerId={currentPlayerId} />;
    } else {
      return RenderJudgeOrPlayerView();
    }
  };

  return (
    <div className='App'>
      <header className='center-container'>
       {renderViews()}
      </header>
    </div>
  );
}

export default App;
