import React from "react";
const { Rune } = window;

export default function ShowDefinitions({
	definitionsObject,
	isJudge,
	players,
}) {
	const { definitions, stateFlag } = definitionsObject;

	const renderDefinitionsForJudge = () => (
		<div className="flex-container">
			{Object.keys(definitions).map((playerID, index) => (
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
	);

	const renderDefinitionsForPlayers = () => (
		<div className="flex-container">
			{Object.keys(definitions).map((playerID, index) => (
				<div
					className="definition-button"
					key={`definition-${index}`}
					value={playerID}
				>
					<p>
						<span className="pink-font">{players[playerID].displayName} -</span>
						<span>{definitions[playerID]}</span>
					</p>
				</div>
			))}
		</div>
	);

	const onclickHandler = (value) => {
		Rune.actions.incrementScore(value);
	};

	switch (true) {
		case isJudge && stateFlag === true:
			return (
				<div className="show-definition">{renderDefinitionsForJudge()}</div>
			);

		case !isJudge && stateFlag === true:
			return (
				<div className="show-definition">{renderDefinitionsForPlayers()}</div>
			);

		default:
			return null;
	}
}
