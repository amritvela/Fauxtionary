import React from "react";

export default function ShowDefinitions({ definitionsObject }) {
	const { definitions, stateFlag } = definitionsObject;
	const renderDefinition = () => {
		if (stateFlag === true) {
			const definitionsToBeShown = Object.values(definitions);
			return (
				<>
					<div>
						{definitionsToBeShown.map((definition, index) => (
							<button className="definition-button" key={`definition-${index}`}>
								{definition}
							</button>
						))}
					</div>
				</>
			);
		}
	};
	return <div className="show-definition">{renderDefinition()}</div>;
}
