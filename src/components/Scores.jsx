import React from "react";

function Scores({ players, scores, roundNum }) {
	function displayInfo() {
		const allPlayersInfo = Object.values(players);
		return (
			<div className="scores-container">
				{allPlayersInfo.map((playerInfoObj, index) => (
					<div
						className="flex-container"
						key={`${playerInfoObj.playerId}${index}`}
					>
						<div className="player-info">
							<img
								alt={`player-${index}-avatar`}
								src={playerInfoObj.avatarUrl}
								className="avatar"
							/>
							<div className="name-score">
								<div className="player-name">{playerInfoObj.displayName}</div>
								<div>{scores[playerInfoObj.playerId]}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="scores-component">
			<h3 className="scores-title">Round # {roundNum}</h3>
			{displayInfo()}
		</div>
	);
}

export default Scores;
