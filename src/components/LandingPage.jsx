import React from "react";
import Instructions from "./Instructions";
const LandingPage = ({ currentPlayerId, currentRoundWinner }) => {
	return (
		<div className="flex-container">
			<h1 className="title text-shadows">Fauxtionary</h1>
			<Instructions
				currentPlayerId={currentPlayerId}
				currentRoundWinner={currentRoundWinner}
			/>
		</div>
	);
};

export default LandingPage;
