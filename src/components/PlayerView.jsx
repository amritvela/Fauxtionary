import DefinitionInput from "./DefinitionInput";
import RandomWord from "./RandomWord";
import RoleDisplay from "./RoleDisplay";
import Scores from "./Scores";
import ShowDefinitions from "./ShowDefinitions";

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
}) => {
	const renderPlayerStageView = () => {
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
			return <div className="waiting-text">Waiting for Judge to Start</div>;
		} else if (roundStage === "submitDefinition") {
			return (
				<>
					<Scores players={players} scores={scores} />
					<RandomWord gameState={gameState} wordIndex={wordIndex} />
					<DefinitionInput
						currentPlayerId={currentPlayerId}
						definitions={definitions}
					/>
				</>
			);
		} else if (roundStage === "decisionMaking") {
			return (
				<>
					<Scores players={players} scores={scores} />
					<RandomWord gameState={gameState} wordIndex={wordIndex} />
					<h2 className="waiting-text">Here are all the competing answers!</h2>
					<h2 className="waiting-text">Waiting for the Judge's decision</h2>
					<ShowDefinitions definitionsObject={definitionsObject} />
				</>
			);
		}
	};
	return <>{renderPlayerStageView()}</>;
};

export default PlayerView;
