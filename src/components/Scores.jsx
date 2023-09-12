import React from "react";

function Scores({ players, scores }) {
	//   const [allPlayers, setAllPlayers] = useState([]);

	//   useEffect(() => {
	//     let playerInfoAndScore = {};
	//     const playerArr = [];
	//     for (let info in scores) {
	//       const currentPlayerInfo = players[info];
	//       playerInfoAndScore = { ...currentPlayerInfo, score: scores[info] };
	//       playerArr.push(playerInfoAndScore);
	//     }
	//     setAllPlayers(playerArr);
	//   }, [scores]);

	function displayInfo() {
		const allPlayersInfo = Object.keys(players);

		return (
			<div className="scores-container">
				{allPlayersInfo.map((playerObj, index) => (
					<div className="player-info" key={`${playerObj.playerId}-${index}`}>
						<div className="flex-container">
							{/* <img src={`${playerObj.avatarURL}`} alt="user-avatar" /> */}
							<div>{players[playerObj].displayName}</div>
							<div>{scores[playerObj]}</div>
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="scores-component">
			<h3>Current Scores</h3>
			{displayInfo()}
		</div>
	);
}

export default Scores;
