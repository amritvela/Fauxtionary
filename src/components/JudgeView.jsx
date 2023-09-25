import React, { useState } from "react";
import RandomWord from "./RandomWord";
import ShowDefinitions from "./ShowDefinitions";
import RoleDisplay from "./RoleDisplay";
import Scores from "./Scores";
import DisplayRoundWinner from "./DisplayRoundWinner";
import AnnounceWinner from "./AnnounceWinner";

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
	currentRoundWinner,
	roundNum,
	currentPlayerId,
	winner,
}) => {
	const [disable, setDisable] = useState(false);

	const renderJudgeStageView = () => {
		switch (roundStage) {
			case "displayRole":
				return (
					<>
						<RoleDisplay
							roundNum={roundNum}
							gameState={gameState}
							roundStage={roundStage}
							isJudge={isJudge}
							players={players}
							currentPlayerId={currentPlayerId}
						/>
					</>
				);

			case "awaitingStart":
				if (!disable) {
					return (
						<div className="flex-container">
							<h2 className="heading-styles">
								Click to start round: {roundNum}
							</h2>
							<div>
								<Player
									autoplay
									loop
									src="https://lottie.host/f037c018-4e23-4f44-9156-0f4347bc0057/QgqfHXgqar.json"
									className="book-animation"
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
				break;

			case "submitDefinition":
				return (
					<>
						<Scores players={players} scores={scores} roundNum={roundNum} />
						<RandomWord gameState={gameState} wordIndex={wordIndex} />
						<h2 className="h-styles">Waiting for submissions</h2>
						<div>
							<Player
								autoplay
								loop
								src="https://lottie.host/db71ff58-df28-4853-b540-483cd3eb522b/Nkv4dVvnSO.json"
								className="loading-animation"
							></Player>
						</div>
					</>
				);

			case "decisionMaking":
				return (
					<>
						<Scores players={players} scores={scores} roundNum={roundNum} />
						<RandomWord gameState={gameState} wordIndex={wordIndex} />
						<h2 className="h-styles">Pick the winning fauxtinition!</h2>
						<ShowDefinitions
							isJudge={isJudge}
							definitionsObject={definitionsObject}
						/>
					</>
				);

			case "announcement":
				return (
					<>
						<Scores players={players} scores={scores} roundNum={roundNum} />
						<button
							onClick={() => {
								Rune.actions.continueToNextRound();
							}}
						>
							Click to start the next round
						</button>
						<DisplayRoundWinner
							definitionsObject={definitionsObject}
							currentRoundWinner={currentRoundWinner}
						/>
					</>
				);

			case "announceWinner":
				return (
					<>
						<AnnounceWinner players={players} winner={winner} />
					</>
				);

			default:
				return null;
		}
	};
	return <>{renderJudgeStageView()}</>;
};
export default JudgeView;
