import React from "react";
import { useDisableButton } from "./CustomHooks";

const { Rune } = window;

const RoleDisplay = ({ isJudge, currentPlayerId, players }) => {
	const { disableButton, setDisableButton } = useDisableButton();

	const playerRoleInstructions = isJudge ? (
		<>
			<h3 className="heading">Your role is: "Judge"</h3>
			<ul className="instructions">
				<li>Click 'start game' to display the word</li>
				<li>Select the definition you like the most</li>
				<li>Submit to announce the winner!</li>
			</ul>
		</>
	) : (
		<>
			<h3 className="heading">Your role is: "Player"</h3>
			<ul className="instructions">
				<li>Come up with a faux definition for the given word</li>
				<li>Make the definition sound as humorous or absurd as possible</li>
				<li>Click on submit to see if you won!</li>
			</ul>
		</>
	);

	const continueButtonLabel = isJudge
		? "Click to Continue"
		: "Click to Continue";

	const handleContinueScreen = () => {
		Rune.actions.continueToNextScreen();
		Rune.actions.determineRoundStage();
		setDisableButton(true);
	};

	return (
		<div className="center-container">
			<h2 className="smaller-title white-background">How to play</h2>
			<div className="avatar-box">
				<img alt={`player-avatar`} src={players[currentPlayerId].avatarUrl} />
				<p>{players[currentPlayerId].displayName}</p>
			</div>
			<div className="bubble-bottom">{playerRoleInstructions}</div>
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
					{continueButtonLabel}
				</button>
			)}
		</div>
	);
};

export default RoleDisplay;
