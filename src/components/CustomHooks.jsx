import { useState } from "react";

export const useDisableButton = () => {
	const [disableButton, setDisableButton] = useState(false);

	return { disableButton, setDisableButton };
};
