import DefinitionInput from "./DefinitionInput";
import RandomWord from "./RandomWord";
import RoleDisplay from "./RoleDisplay";
import Scores from "./Scores";
import ShowDefinitions from "./ShowDefinitions";
import DisplayRoundWinner from "./DisplayRoundWinner";
import { Player } from "@lottiefiles/react-lottie-player";
import AnnounceWinner from "./AnnounceWinner";

const PlayerView = ({
	players,
	scores,
	isJudge,
	gameState,
	currentPlayerId,
	definitions,
	roundStage,
	wordIndex,
	definitionsObject,
	currentRoundWinner,
	roundNum,
	winner,
}) => {
	const renderPlayerStageView = () => {
		switch (roundStage) {
			case "displayRole":
				return (
					<>
						<RoleDisplay
							players={players}
							currentPlayerId={currentPlayerId}
							roundNum={roundNum}
							gameState={gameState}
							roundStage={roundStage}
							isJudge={isJudge}
						/>
					</>
				);

			case "awaitingStart":
				return (
					<div className="center-container">
						<h2 className="heading-styles">
							Waiting to start round: {roundNum}
						</h2>
						<div>
							<Player
								autoplay
								loop
								src="https://lottie.host/f037c018-4e23-4f44-9156-0f4347bc0057/QgqfHXgqar.json"
								className="book-animation"
							></Player>
						</div>
					</div>
				);

			case "submitDefinition":
				return (
					<>
						<Scores players={players} scores={scores} roundNum={roundNum} />
						<RandomWord gameState={gameState} wordIndex={wordIndex} />
						<DefinitionInput
							currentPlayerId={currentPlayerId}
							definitions={definitions}
						/>
					</>
				);

			case "decisionMaking":
				return (
					<>
						<Scores players={players} scores={scores} roundNum={roundNum} />
						<RandomWord gameState={gameState} wordIndex={wordIndex} />
						<h2 className="h-styles">Waiting for the Judge's decision</h2>
						<ShowDefinitions
							players={players}
							isJudge={isJudge}
							definitionsObject={definitionsObject}
						/>
					</>
				);

			case "announcement":
				return (
					<>
						<Scores players={players} scores={scores} roundNum={roundNum} />
						<RandomWord gameState={gameState} wordIndex={wordIndex} />
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

	return <>{renderPlayerStageView()}</>;
};

export default PlayerView;
