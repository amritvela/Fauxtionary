import React, { useEffect } from "react";
import { useState } from "react";
const Book = () => {
	const [bookOpened, setBookOpened] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setBookOpened(true);
		}, 300);
	}, []);
	return (
		<div className={`book ${bookOpened ? `opened` : ``}`}>
			<div className="back"></div>
			<div className="page6"></div>
			<div className="page5"></div>
			<div className="page4"></div>
			<div className="page3"></div>
			<div className="page2"></div>
			<div className="page1"></div>
			<div className="front">Let's Play!</div>
		</div>
	);
};

export default Book;
