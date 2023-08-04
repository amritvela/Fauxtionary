import React, { useState } from "react";

const { Rune } = window;

export default function DefinitionInput({ currentPlayerId }) {
	const [inputVal, setInputVal] = useState("");
	function handleDefinitionSubmission(e) {
		e.preventDefault();
		Rune.actions.addDefinition({ currentPlayerId, inputVal });
		setInputVal("");
	}
	return (
		<form className="input-and-submit" onSubmit={handleDefinitionSubmission}>
			<input
				type="text"
				value={inputVal}
				onChange={(e) => setInputVal(e.target.value)}
			/>
			<button>Submit your Faux-definition</button>
		</form>
	);
}
