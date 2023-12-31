import React from "react";
import data from "../fakeWords.json";

export default function RandomWord({ wordIndex }) {
	function renderWord() {
		if (wordIndex || wordIndex === 0) {
			return (
				<div className="word">
					<p>{data.fake_words[wordIndex].toUpperCase()}</p>
				</div>
			);
		} else {
			return null;
		}
	}

	return <>{renderWord()}</>;
}
