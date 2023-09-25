/*
	REFACTORING TIP : ONLY HAVE SINGLE MAPPING FUNCTION AND CONDITIONALLY RENDER THE BUTTON VS DIV BASED ON THE ISJUDGE STATE
*/
import React from "react";
const { Rune } = window;

export default function ShowDefinitions({
	definitionsObject,
	isJudge,
	players,
}) {
	const { definitions, stateFlag } = definitionsObject;
	function onclickHandler(e) {
		Rune.actions.incrementScore(e);
	}

	const renderDefinition = () => {
		const definitionsToBeShown = Object.keys(definitions);
		if (isJudge && stateFlag === true) {
			return (
				<>
					<div className="flex-container">
						{definitionsToBeShown.map((playerID, index) => (
							<button
								className="judge-button"
								key={`definition-${index}`}
								value={playerID}
								onClick={(e) => onclickHandler(e.target.value)}
							>
								{definitions[playerID]}
							</button>
						))}
					</div>
				</>
			);
		} else if (!isJudge && stateFlag === true) {
			return (
				<>
					<div className="flex-container">
						{definitionsToBeShown.map((playerID, index) => (
							<div
								className="definition-button"
								key={`definition-${index}`}
								value={playerID}
							>
								<p>
									<span className="pink-font">
										{players[playerID].displayName} -
									</span>
									<span>{definitions[playerID]}</span>
								</p>
							</div>
						))}
					</div>
				</>
			);
		}
	};
	return <div className="show-definition">{renderDefinition()}</div>;
}
