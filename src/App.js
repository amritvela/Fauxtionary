import { useSelector } from 'react-redux';
import PlayerCard from './components/PlayerCard';
import { useDispatch } from 'react-redux';
import {
  clearPlayers,
  incrementPlayer,
  switchGameOverFalse,
} from './features/gameStateSlice';
import gameMode from './lib/gameMode';

function App() {
  const playersArr = useSelector((state) => state.gameState.currentPlayers);

  function HandleInitializePlayers() {
    const dispatch = useDispatch();

      dispatch(clearPlayers());
      dispatch(switchGameOverFalse());
      // generate all the players
      // const doctor = 3;
      // const scientist = 4;
      // const busyBody = 0;
      for (let i = 0; i < 7; i++) {
        let role = 'normal';
        if (i === 3) {
          role = 'doctor';
        } else if (i === 4) {
          role = 'scientist';
        } else if (i === 0) {
          role = 'busyBody';
        }
  
        dispatch(
          incrementPlayer({
            playerId: i,
            active: true,
            role: role,
          })
        );
      }
      
    }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Zombi Party</h1>
        <button onClick={HandleInitializePlayers}>Enter Party</button>
        <button onClick={gameMode}>Switch Day</button>
        <div>
          {playersArr.map((player, index) => (
            <PlayerCard playerId={player.playerId} role={player.role} key={player.playerId}/>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
