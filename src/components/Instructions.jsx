import React, { useState } from "react";
import Book from "./Book";
const { Rune } = window;

function Instructions({ currentPlayerId }) {
	const [bookVisible, setBookVisible] = useState(false);

	function handleEnterGame() {
		Rune.actions.assignRoles();
		Rune.actions.assignJudgeArray(currentPlayerId);
		Rune.actions.determineRoundStage();
		Rune.actions.assignInitialScores();
	}

	return (
		<>
			{bookVisible ? (
				<div>
					<Book />
				</div>
			) : (
				<div className="amoeba" onClick={() => setBookVisible(!bookVisible)}>
					Let's play!
				</div>
			)}
			<div className="bubble-top">
				<p className="heading">Let's get started!</p>
				<p>Click 'Enter game' to see your role</p>
			</div>
			<button onClick={handleEnterGame}>Enter Game</button>
		</>
	);
}

export default Instructions;
