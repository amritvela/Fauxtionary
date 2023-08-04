import React, { useState } from "react";

const { Rune } = window;

export default function DefinitionInput({ currentPlayerId, definitions = {} }) {
	const [inputVal, setInputVal] = useState("");
	function handleDefinitionSubmission(e) {
		e.preventDefault();
		Rune.actions.addDefinition({ currentPlayerId, inputVal });
		setInputVal("");
	}
	const definitionSubmitted = currentPlayerId in definitions;
	return (
		<>
			{definitionSubmitted ? (
				<p>Faux-tinition submitted!</p>
			) : (
				<form
					className="input-and-submit"
					onSubmit={handleDefinitionSubmission}
				>
					<textarea
						type="text"
						value={inputVal}
						onChange={(e) => setInputVal(e.target.value)}
					/>
					<button>Submit</button>
				</form>
			)}
		</>
	);
}
