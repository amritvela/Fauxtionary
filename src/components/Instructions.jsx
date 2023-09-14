import React from "react";
import Book from "./Book";
import { useDisableButton } from "./CustomHooks";
const { Rune } = window;

function Instructions({ currentPlayerId }) {
	const { disableButton, setDisableButton } = useDisableButton();

	function handleEnterGame() {
		Rune.actions.assignRoles();
		Rune.actions.assignJudgeArray(currentPlayerId);
		Rune.actions.determineRoundStage();
		Rune.actions.assignInitialScores();
		setDisableButton(true);
	}

	return (
		<>
			{disableButton ? (
				<div>
					<Book />
				</div>
			) : (
				<div className="amoeba">Let's play!</div>
			)}
			<div className="bubble-top">
				<p className="heading">To get started!</p>
				<p>Click 'Enter game' to see your role</p>
			</div>
			{disableButton ? (
				<>
					<p className="waiting-text">Waiting for players to enter the game</p>
				</>
			) : (
				<>
					<button onClick={handleEnterGame} disabled={disableButton}>
						Enter Game
					</button>
				</>
			)}
		</>
	);
}

export default Instructions;
