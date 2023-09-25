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
	const [error, setError] = useState(""); // State for error message

	function handleDefinitionSubmission(e) {
		e.preventDefault();

		// Check if inputVal is empty
		if (inputVal.trim() === "") {
			setError("Please enter a definition."); // Set error message
			return; // Prevent submission
		}

		// Reset error message
		setError("");

		Rune.actions.addDefinition({ currentPlayerId, inputVal });
		setInputVal("");
		Rune.actions.determineRoundStage();
	}

	const definitionSubmitted = currentPlayerId in definitions;
	return (
		<>
			{definitionSubmitted ? (
				<h3 className="h-styles additional-margin">Fauxtinition submitted!</h3>
			) : (
				<form className="flex-container" onSubmit={handleDefinitionSubmission}>
					<h3 className="h-styles additional-margin">
						Submit your Fauxtinition
					</h3>

					<textarea
						type="text"
						value={inputVal}
						onChange={(e) => setInputVal(e.target.value)}
					/>

					{/* Display error message if input is empty */}
					{error && <p className="error-message">{error}</p>}

					<button className="additional-margin">Submit</button>
				</form>
			)}
		</>
	);
}
