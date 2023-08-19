import DefinitionInput from "./DefinitionInput";
import RandomWord from "./RandomWord";
import ShowDefinitions from "./ShowDefinitions";

const PlayerView = ({
	gameState,
	currentPlayerId,
	definitions,
	roundStage,
	wordIndex,
	definitionsObject,
}) => {
	const renderStageView = () => {
		if (roundStage === "awaitingStart") {
			return <div>Waiting for Judge to Start</div>;
		} else if (roundStage === "submitDefinition") {
			return (
				<>
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
					<RandomWord gameState={gameState} wordIndex={wordIndex} />
					<h2>Waiting for the Judge to make a decision</h2>
					<ShowDefinitions definitionsObject={definitionsObject} />
				</>
			);
		}
	};
	return <>{renderStageView()}</>;
};

export default PlayerView;
