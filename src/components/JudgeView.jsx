import React, { useState } from "react";
import RandomWord from "./RandomWord";
import ShowDefinitions from "./ShowDefinitions";
import RoleDisplay from "./RoleDisplay";
import Scores from "./Scores";
import { Player } from "@lottiefiles/react-lottie-player";
const { Rune } = window;

const JudgeView = ({
	players,
	scores,
	gameState,
	wordIndex,
	roundStage,
	definitionsObject,
	isJudge,
}) => {
	const [disable, setDisable] = useState(false);

	const renderJudgeStageView = () => {
		if (roundStage === "displayRole") {
			return (
				<>
					<RoleDisplay
						gameState={gameState}
						roundStage={roundStage}
						isJudge={isJudge}
					/>
				</>
			);
		} else if (roundStage === "awaitingStart") {
			if (disable === false) {
				return (
					<div className="flex-container">
						<h2 style={{ textShadow: "4px 4px 0 #78e1ab", marginTop: "110px" }}>
							Click to start the game!
						</h2>
						<div>
							<Player
								autoplay
								loop
								src="https://lottie.host/f037c018-4e23-4f44-9156-0f4347bc0057/QgqfHXgqar.json"
								style={{ height: "300px", width: "300px" }}
							></Player>
						</div>
						<button
							onClick={() => {
								Rune.actions.generateWord();
								Rune.actions.determineRoundStage();
								setDisable(true);
							}}
						>
							Start Game
						</button>
					</div>
				);
			}
		} else if (roundStage === "submitDefinition") {
			return (
				<>
					<Scores players={players} scores={scores} />
					<RandomWord gameState={gameState} wordIndex={wordIndex} />
					<h2 className="h-styles additional-margin">
						Wait for players to submit their Faux-tinition
					</h2>
					<div>
						<Player
							autoplay
							loop
							src="https://lottie.host/db71ff58-df28-4853-b540-483cd3eb522b/Nkv4dVvnSO.json"
							style={{ height: "300px", width: "300px" }}
						></Player>
					</div>
				</>
			);
		} else if (roundStage === "decisionMaking") {
			return (
				<>
					<Scores players={players} scores={scores} />
					<RandomWord gameState={gameState} wordIndex={wordIndex} />
					<h2 className="h-styles">Pick the winning faux-tinition!</h2>
					<ShowDefinitions definitionsObject={definitionsObject} />
				</>
			);
		}
	};

	return <>{renderJudgeStageView()}</>;
};
export default JudgeView;
