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
		const allPlayersInfo = Object.values(players);
		// console.log(allPlayersInfo);
		return (
			<div className="scores-container">
				{allPlayersInfo.map((playerInfoObj, index) => (
					<div
						className="flex-container"
						key={`${playerInfoObj.playerId}${index}`}
					>
						<img
							alt={`player-${index}-avatar`}
							src={playerInfoObj.avatarUrl}
							style={{ width: "70px", height: "70px" }}
						/>
						<div>{playerInfoObj.displayName}</div>
						<div>{scores[playerInfoObj.playerId]}</div>
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
