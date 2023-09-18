import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const DisplayRoundWinner = ({ definitionsObject, currentRoundWinner }) => {
	const { definitions, stateFlag } = definitionsObject;
	const definitionsToBeShown = Object.keys(definitions);
	const highlightedIndex = definitionsToBeShown.indexOf(currentRoundWinner);

	const renderPickedDefiniton = () => {
		if (stateFlag === true && currentRoundWinner !== "") {
			return (
				<>
					<div className="flex-container additional-margin">
						{definitionsToBeShown.map((playerID, index) => (
							<React.Fragment key={`currentRoundWinner-${index}`}>
								{index === highlightedIndex ? (
									<div style={{ position: "relative" }}>
										<Player
											autoplay
											loop
											src="https://lottie.host/02c6f128-4383-4411-b7c6-68b7c9503266/zTSrhmsCg2.json"
											className="confetti"
										></Player>
										<div
											className="highlighted-definition"
											key={`${index}${highlightedIndex}`}
										>
											{definitions[playerID]}
										</div>
									</div>
								) : (
									<div
										className="definition-button"
										key={`${index}${highlightedIndex}`}
									>
										{definitions[playerID]}
									</div>
								)}
							</React.Fragment>
						))}
					</div>
				</>
			);
		}
	};
	return <div className="show-definition">{renderPickedDefiniton()}</div>;
};

export default DisplayRoundWinner;
