import React, { useEffect, useState } from 'react';
import Scores from './components/Scores';
import RandomWord from './components/RandomWord';
import DefinitionInput from './components/DefinitionInput';
import ShowDefinitions from './components/ShowDefinitions';
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

  const [judgeId, setJudgeId] = useState('');
  const [isJudge, setIsJudge] = useState(false);
  const [roundStage, setRoundStage] = useState('acceptingPlayers');

  useEffect(() => {
    import('./logic').then(() =>
      Rune.initClient({
        onChange: (runeState) => {
          // console.log(runeState.newGame.scores);
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
        },
      })
    );
  }, []);

  useEffect(() => {
    if (judgeId !== '' && judgeId === currentPlayerId) {
      setIsJudge(true);
    }
  }, [judgeId]);

  /**
   * Once the roles are assigned, this function render sthe JudgeView and PlayerView
   */
  const RenderJudgeOrPlayerView = () => {
    if (isJudge) {
      return (
        <div>
          <Scores players={players} scores={scores} />
          <JudgeView
            gameState={gameState}
            wordIndex={wordIndex}
            roundStage={roundStage}
            definitionsObject={definitionsObject}
            definitions={definitionsObject.definitions}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Scores players={players} scores={scores} />
          <PlayerView
            definitionsObject={definitionsObject}
            gameState={gameState}
            currentPlayerId={currentPlayerId}
            definitions={definitionsObject.definitions}
            roundStage={roundStage}
            wordIndex={wordIndex}
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
      <header className='App-header'>
        <div>{renderViews()}</div>
      </header>
    </div>
  );
}

export default App;
