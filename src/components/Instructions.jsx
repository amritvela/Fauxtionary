import React from "react";
const { Rune } = window;

function Instructions() {
	function handleEnterGame() {
		Rune.actions.assignRoles();
	}

	return (
		<div>
			<p>INSERT INSTRUCTIONS HERE</p>
			<button onClick={handleEnterGame()}>Enter Game</button>
		</div>
	);
}

export default Instructions;
