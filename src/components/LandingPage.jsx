import React from "react";
import Instructions from "./Instructions";
const LandingPage = ({ currentPlayerId }) => {
	return (
		<div className="flex-container additional-margin">
			<h1 className="title text-shadows">Fauxtionary</h1>
			<Instructions currentPlayerId={currentPlayerId} />
		</div>
	);
};

export default LandingPage;
