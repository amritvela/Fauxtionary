import React from "react";
import Instructions from "./Instructions";
const LandingPage = ({ currentPlayerId }) => {
	return (
		<div>
			<h1>Welcome to Faux-tionary</h1>
			<Instructions currentPlayerId={currentPlayerId} />
		</div>
	);
};

export default LandingPage;
