import React from "react";

export default function ShowDefinitions({ definitionsObject }) {
	const { definitions, stateFlag } = definitionsObject;
	const renderDefinition = () => {
		if (stateFlag === true) {
			const definitionsToBeShown = Object.values(definitions);
			return (
				<>
					<h2>Waiting for the Judge to make a decision</h2>
					<ul>
						{definitionsToBeShown.map((definition, index) => (
							<li key={`definition-${index}`}>{definition}</li>
						))}
					</ul>
				</>
			);
		}
	};
	return <div className="show-definition">{renderDefinition()}</div>;
}
