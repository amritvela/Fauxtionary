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
		<div>
			{isJudge ? (
				<>
					<div className="bubble-bottom">
						<h2 className="title">Let's play Fauxtionary!</h2>
						<h3 className="heading">Your role is : "Judge"</h3>
						<h4 className="heading">How to play: </h4>
						<ul>
							<li>Click 'start game' to display the word</li>
							<li>Select the definition you like the most</li>
							<li>Submit to announce the winner!</li>
						</ul>
					</div>
					{disableButton ? (
						<p>Waiting for all players to press continue</p>
					) : (
						<button onClick={handleContinueScreen} disabled={disableButton}>
							Click to Continue
						</button>
					)}
				</>
			) : (
				<>
					<div className="bubble-bottom">
						<h2 className="title">Let's play Fauxtionary!</h2>
						<h3 className="heading">Your role is : "Player"</h3>
						<h4 className="heading">How to play:</h4>
						<ul>
							<li>Come up with a fake definition for the given word</li>
							<li>
								Make the definition sound as humorous or absurd as possible
							</li>
							<li>Click on submit to see if you won!</li>
						</ul>
					</div>
					{disableButton ? (
						<p>Waiting for all players to press continue</p>
					) : (
						<button onClick={handleContinueScreen} disabled={disableButton}>
							Click to Continue
						</button>
					)}
				</>
			)}
		</div>
	);
};

export default RoleDisplay;
