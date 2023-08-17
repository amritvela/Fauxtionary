import React from "react";
const { Rune } = window;

const JudgeView = () => {
	return (
		<div>
			<button
				onClick={() => {
					Rune.actions.generateWord();
				}}
			>
				Start Game
			</button>
		</div>
	);
};

export default JudgeView;
