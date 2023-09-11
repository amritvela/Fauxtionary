import React, { useState } from "react";
import RandomWord from "./RandomWord";
import ShowDefinitions from "./ShowDefinitions";
import RoleDisplay from "./RoleDisplay";
import Scores from "./Scores";

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
					<>
						<h2>Click button to start the game!</h2>
						<button
							onClick={() => {
								Rune.actions.generateWord();
								Rune.actions.determineRoundStage();
								setDisable(true);
							}}
						>
							Start Game
						</button>
					</>
				);
			}
		} else if (roundStage === "submitDefinition") {
			return (
				<>
					<Scores players={players} scores={scores} />
					<RandomWord gameState={gameState} wordIndex={wordIndex} />
					<h2>Wait for players to submit their Faux-tinition</h2>
				</>
			);
		} else if (roundStage === "decisionMaking") {
			return (
				<>
					<Scores players={players} scores={scores} />
					<RandomWord gameState={gameState} wordIndex={wordIndex} />
					<h2>Pick the winning faux-tinition!</h2>
					<ShowDefinitions definitionsObject={definitionsObject} />
				</>
			);
		}
	};

	return <div>{renderJudgeStageView()}</div>;
};
export default JudgeView;
