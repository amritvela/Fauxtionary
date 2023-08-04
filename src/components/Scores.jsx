import React, { useState, useEffect } from "react";

function Scores({ players, scores }) {
	const [allPlayers, setAllPlayers] = useState([]);

	useEffect(() => {
		let playerInfoAndScore = {};
		const playerArr = [];
		for (let info in scores) {
			const currentPlayerInfo = players[info];
			playerInfoAndScore = { ...currentPlayerInfo, score: scores[info] };
			playerArr.push(playerInfoAndScore);
		}
		setAllPlayers(playerArr);
	}, [scores]);

	function displayInfo() {
		return (
			<div className="scores-container">
				{allPlayers.map((playerObj) => (
					<div className="player-info" key={`${playerObj.playerId}`}>
						{/* <img src={`${playerObj.avatarURL}`} alt="user-avatar" /> */}
						<p>
							{playerObj.displayName}: {playerObj.score}
						</p>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="scores-component">
			<h2>Current Scores</h2>
			{displayInfo()}
		</div>
	);
}

export default Scores;
