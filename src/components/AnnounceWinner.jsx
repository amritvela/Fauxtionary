import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const AnnounceWinner = ({ players, winner }) => {
	return (
		<div className="avatar-box flex-container" style={{ marginTop: "100px" }}>
			<img alt={`player-avatar`} src={players[winner].avatarUrl} />
			<p> CONGRATULATIONS {players[winner].displayName} !!!</p>
			<Player
				autoplay
				loop
				src="https://lottie.host/4595ca59-c2b4-4c27-be95-5d3dc63f4408/RokmZq464I.json"
				className="trophy"
			></Player>
		</div>
	);
};

export default AnnounceWinner;
