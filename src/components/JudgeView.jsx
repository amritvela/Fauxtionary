import React from "react";
import RandomWord from "./RandomWord";
const { Rune } = window;

const JudgeView = () => {
	return (
		<div>
			<>
				<RandomWord />
			</>
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
