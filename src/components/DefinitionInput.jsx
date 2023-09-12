/*
 * TO DO: Right now all the definitions are given to the definition input component as a prop
 * to check if the answer is sumbitted and disable additional submissions
 * Refactor tip : Create a Rune action that the player can call to see if they've submitted an answer
 * This is better structure from an OOP pov because definitions should remain private to the individual player
 */

import React, { useState } from "react";

const { Rune } = window;

export default function DefinitionInput({ currentPlayerId, definitions = {} }) {
	const [inputVal, setInputVal] = useState("");

	function handleDefinitionSubmission(e) {
		e.preventDefault();
		Rune.actions.addDefinition({ currentPlayerId, inputVal });
		setInputVal("");
		Rune.actions.determineRoundStage();
	}

	const definitionSubmitted = currentPlayerId in definitions;
	return (
		<>
			{definitionSubmitted ? (
				<h3 className="h-styles additional-margin">Faux-tinition submitted!</h3>
			) : (
				<form
					className="input-and-submit"
					onSubmit={handleDefinitionSubmission}
				>
					<h3 className="h-styles additional-margin">
						Submit your Faux-tinition
					</h3>

					<textarea
						className="additional-margin"
						type="text"
						value={inputVal}
						onChange={(e) => setInputVal(e.target.value)}
					/>
					<button className="additional-margin">Submit</button>
				</form>
			)}
		</>
	);
}
