/*
	SCOPE FOR REFACTORING: Refactor the repeating blocks of code to be a function that can be invoked in multiple places eg: line 31 to 44 can be refactored to be a reusable function 
*/
import React from "react";
import { useDisableButton } from "./CustomHooks";

const { Rune } = window;

const RoleDisplay = ({ isJudge, roundNum, currentPlayerId, players }) => {
	const { disableButton, setDisableButton } = useDisableButton();
	const handleContinueScreen = () => {
		Rune.actions.continueToNextScreen();
		Rune.actions.determineRoundStage();
		setDisableButton(true);
	};

	return (
		<div className="center-container">
			{isJudge ? (
				<>
					<h2 className="smaller-title white-background">How to play</h2>
					<div className="avatar-box">
						<img
							alt={`player-avatar`}
							src={players[currentPlayerId].avatarUrl}
						/>
						<p>{players[currentPlayerId].displayName}</p>
					</div>
					<div className="bubble-bottom">
						<h3 className="heading">Your role is : "Judge"</h3>
						<ul className="instructions">
							<li>Click 'start game' to display the word</li>
							<li>Select the definition you like the most</li>
							<li>Submit to announce the winner!</li>
						</ul>
					</div>
					{disableButton ? (
						<p className="waiting-text additional-margin">
							Waiting for players to continue
						</p>
					) : (
						<button
							className="additional-margin"
							onClick={handleContinueScreen}
							disabled={disableButton}
						>
							Click to Continue
						</button>
					)}
				</>
			) : (
				<>
					<h2 className="smaller-title white-background">How to play</h2>
					<div className="avatar-box">
						<img
							alt={`player-avatar`}
							src={players[currentPlayerId].avatarUrl}
						/>
						<p>{players[currentPlayerId].displayName}</p>
					</div>
					<div className="bubble-bottom">
						<h3 className="heading">Your role is : "Player"</h3>
						<ul className="instructions">
							<li>Come up with a faux definition for the given word</li>
							<li>
								Make the definition sound as humorous or absurd as possible
							</li>
							<li>Click on submit to see if you won!</li>
						</ul>
					</div>
					{disableButton ? (
						<p className="waiting-text additional-margin">
							Waiting for players to continue
						</p>
					) : (
						<button
							className="additional-margin"
							onClick={handleContinueScreen}
							disabled={disableButton}
						>
							Click to Continue
						</button>
					)}
				</>
			)}
		</div>
	);
};

export default RoleDisplay;
