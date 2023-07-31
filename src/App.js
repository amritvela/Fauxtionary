import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WordCard from './components/WordCard'
import { switchDay, incrementPlayer } from './features/gameStateSlice'
const { Rune } = window

function App() {
  const playersArr = useSelector((state) => state.gameState.currentPlayers)
  const dispatch = useDispatch()
  // console.log(window);
  useEffect(() => {
    import('./logic').then(() =>
      Rune.initClient({
        onChange: ({ newGame, players, yourPlayerId, action, event }) => {
          console.log(Rune.actions)
        },
      })
    )
  }, [])

  function HandleInitializePlayers() {
    // dispatch(clearPlayers());
    // dispatch(switchGameOverFalse());
    // generate all the players
    // const doctor = 3;
    // const scientist = 4;
    // const busyBody = 0;
    for (let i = 0; i < 7; i++) {
      let role = 'normal'
      if (i === 3) {
        role = 'doctor'
      } else if (i === 4) {
        role = 'scientist'
      } else if (i === 0) {
        role = 'busyBody'
      }

      dispatch(
        incrementPlayer({
          playerId: i,
          active: true,
          role: role,
        })
      )
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fauxtionary</h1>
        <p>This is a game</p>
        <button onClick={HandleInitializePlayers}>Enter Party</button>
        {/* <button onClick={useGameMode}>Switch Day</button> */}
        <div>
          {playersArr.map((player, index) => (
            <WordCard
              playerId={player.playerId}
              role={player.role}
              key={player.playerId}
            />
          ))}
        </div>
      </header>
    </div>
  )
}

export default App
