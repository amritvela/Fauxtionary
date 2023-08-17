import React from "react";
import data from "../fakeWords.json";

export default function RandomWord({ gameState, wordIndex }) {
	function renderWord() {
		if (wordIndex || wordIndex === 0) {
			return (
				<div>
					<p>{data.fake_words[wordIndex].toUpperCase()}</p>
				</div>
			);
		} else {
			return null;
		}
	}

	return (
		<>
			<div className="word">{renderWord()}</div>
		</>
	);
}
