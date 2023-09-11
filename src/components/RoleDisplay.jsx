import React from "react";
import { useDisableButton } from "./CustomHooks";

const { Rune } = window;

const RoleDisplay = ({ isJudge }) => {
	const { disableButton, setDisableButton } = useDisableButton();

	const handleContinueScreen = () => {
		Rune.actions.continueToNextScreen();
		Rune.actions.determineRoundStage();
		setDisableButton(true);
	};

	return (
		<div className="role-view">
			{isJudge ? (
				<>
					<h2 className="title white-background">How to play</h2>
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
							Waiting for all players to continue
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
					<h2 className="title white-background">How to play</h2>
					<div className="bubble-bottom">
						<h3 className="heading">Your role is : "Player"</h3>
						<ul className="instructions">
							<li>Come up with a fake definition for the given word</li>
							<li>
								Make the definition sound as humorous or absurd as possible
							</li>
							<li>Click on submit to see if you won!</li>
						</ul>
					</div>
					{disableButton ? (
						<p className="waiting-text additional-margin">
							Waiting for all players to continue
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
