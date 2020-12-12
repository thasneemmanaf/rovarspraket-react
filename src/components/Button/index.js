import React from "react";
import "./Button.module.css";
import encodeText from "../../utils/encodeText";
import decodeText from "../../utils/decodeText";
import fetchJokeAPI from "../../utils/fetchJokeAPI";

function Button({
	children,
	type,
	inputText,
	setOutputText,
	setInputText,
	setErrorMessage,
}) {
	// Encode/Decode/Fetch Joke/Show error message based on button type
	const onClickHandler = async (type) => {
		if (type === "encode" && inputText) {
			setOutputText(encodeText(inputText));
		} else if (type === "decode" && inputText) {
			setOutputText(decodeText(inputText));
		} else if (type === "generate_joke") {
			setInputText(await fetchJokeAPI(setErrorMessage));
			setOutputText("");
		} else if (type === "close") {
			setErrorMessage("");
		} else {
			setErrorMessage(`Please enter a joke to ${type} the joke`);
		}
	};

	return <button onClick={() => onClickHandler(type)}>{children}</button>;
}

export default Button;
