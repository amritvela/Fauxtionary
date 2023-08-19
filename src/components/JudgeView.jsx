import React, { useState } from "react";
import RandomWord from "./RandomWord";
import ShowDefinitions from "./ShowDefinitions";
const { Rune } = window;

const JudgeView = ({ gameState, wordIndex, roundStage, definitionsObject }) => {
	const [disable, setDisable] = useState(false);

	const renderJudgeStageView = () => {
		if (roundStage === "awaitingStart") {
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
					<RandomWord gameState={gameState} wordIndex={wordIndex} />
					<h2>Wait for players to submit their Faux-tinition</h2>
				</>
			);
		} else if (roundStage === "decisionMaking") {
			return (
				<>
					<RandomWord gameState={gameState} wordIndex={wordIndex} />

					<h2>Pick the winner!</h2>
					<ShowDefinitions definitionsObject={definitionsObject} />
				</>
			);
		}
	};

	return <div>{renderJudgeStageView()}</div>;
};

export default JudgeView;
