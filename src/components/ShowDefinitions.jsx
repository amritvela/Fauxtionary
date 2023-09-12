import React from "react";
const { Rune } = window;

export default function ShowDefinitions({ definitionsObject }) {
	const { definitions, stateFlag } = definitionsObject;

	function onclickHandler(e) {
		Rune.actions.incrementScore(e);
	}

	const renderDefinition = () => {
		if (stateFlag === true) {
			const definitionsToBeShown = Object.keys(definitions);
			return (
				<>
					<div className="flex-container">
						{definitionsToBeShown.map((playerID, index) => (
							<button
								className="definition-button"
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
		}
	};
	return <div className="show-definition">{renderDefinition()}</div>;
}
