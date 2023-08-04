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
			<textarea
				type="text"
				value={inputVal}
				onChange={(e) => setInputVal(e.target.value)}
			/>
			<button>Submit</button>
		</form>
	);
}
