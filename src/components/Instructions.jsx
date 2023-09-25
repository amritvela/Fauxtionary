/*
 * Conditionally Rendering 'Continue to next round' view vs 'Enter Game' view
 * The condition is if the
 *'currentRoundWinner' useState or runeState.newGame.currentRoundWinner === undefined - Render 'Enter Game' view
 * else Render 'Continue to next round' view
 */

import React from "react";
import Book from "./Book";
import { useDisableButton } from "./CustomHooks";
import { Player } from "@lottiefiles/react-lottie-player";
const { Rune } = window;

function Instructions({ currentPlayerId, currentRoundWinner }) {
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
			{!currentRoundWinner ? (
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
							<p className="waiting-text">
								Waiting for players to enter the game
							</p>
						</>
					) : (
						<>
							<button onClick={handleEnterGame} disabled={disableButton}>
								Enter Game
							</button>
						</>
					)}
				</>
			) : (
				<>
					{disableButton ? (
						<>
							<p className="waiting-text">Waiting for players to continue</p>
							<Player
								autoplay
								loop
								src="https://lottie.host/5a139d25-4da3-452f-9df3-5edd48df3785/baXtSlOfoI.json"
							></Player>
						</>
					) : (
						<>
							<button
								onClick={handleEnterGame}
								disabled={disableButton}
								className="additional-margin"
							>
								Continue to Next Round
							</button>
							<Player
								style={{ margin: "20px", width: "80vw", height: "80vw" }}
								autoplay
								loop
								src="https://lottie.host/3de560bf-1c93-4a08-abcf-bc760cfb718f/n9hdDE6wAS.json"
							></Player>
						</>
					)}
				</>
			)}
		</>
	);
}

export default Instructions;
