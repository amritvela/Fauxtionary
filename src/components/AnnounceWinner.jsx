import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const AnnounceWinner = ({ players, winner }) => {
	return (
		<div className="avatar-box flex-container">
			<h1 className="winner-heading">The Winner is!</h1>
			<img
				alt={`player-avatar`}
				src={players[winner].avatarUrl}
				className="winner-avatar-image"
			/>
			<p className="winner-text">{players[winner].displayName}</p>
			<Player
				autoplay
				loop
				src="https://lottie.host/02c6f128-4383-4411-b7c6-68b7c9503266/zTSrhmsCg2.json"
				className="confetti"
			></Player>
			<Player
				autoplay
				loop
				src="https://lottie.host/203f8b52-ab5f-4f75-8fcd-e9b2f90584ab/C05z7VCgtk.json"
				className="badge"
			></Player>
		</div>
	);
};

export default AnnounceWinner;
