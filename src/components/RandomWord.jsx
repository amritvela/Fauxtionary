import React, { useEffect } from "react";
import data from "../fakeWords.json";
const { Rune } = window;

export default function RandomWord({ gameState, index }) {
	function renderWord() {
		if (!index) {
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
		} else {
			return (
				<div>
					<p>{data.fake_words[index].toUpperCase()}</p>
				</div>
			);
		}
	}

	return (
		<>
			<div className="word">{renderWord()}</div>
			{/* <button onClick={renderWord}>Start Game</button> */}
		</>
	);
}
