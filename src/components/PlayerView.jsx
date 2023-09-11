import DefinitionInput from "./DefinitionInput";
import RandomWord from "./RandomWord";
import RoleDisplay from "./RoleDisplay";
import Scores from "./Scores";
import ShowDefinitions from "./ShowDefinitions";
import { Player } from "@lottiefiles/react-lottie-player";

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
			return (
				<div className="player-waiting-screen">
					<h2 style={{ textShadow: "4px 4px 0 #78e1ab", marginTop: "110px" }}>
						Waiting for judge to start
					</h2>
					<div>
						<Player
							autoplay
							loop
							src="https://lottie.host/f037c018-4e23-4f44-9156-0f4347bc0057/QgqfHXgqar.json"
							style={{ height: "300px", width: "300px" }}
						></Player>
					</div>
				</div>
			);
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
					<h2 className="waiting-text">Here are the competing answers!</h2>
					<h2 className="waiting-text">Waiting for the Judge's decision</h2>
					<ShowDefinitions definitionsObject={definitionsObject} />
				</>
			);
		}
	};
	return <>{renderPlayerStageView()}</>;
};

export default PlayerView;
