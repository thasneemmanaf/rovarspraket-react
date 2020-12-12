import React from "react";
import "./Button.module.css";
import encodeText from "../../utils/encodeText";
import decodeText from "../../utils/decodeText";
import fetchJokeAPI from "../../utils/fetchJokeAPI";

function Button({ children, type, inputText, setOutputText, setInputText }) {
	// Encode/Decode/Fetch Joke based on button type
	const onClickHandler = async (type) => {
		if (type === "encode") {
			setOutputText(encodeText(inputText));
		} else if (type === "decode") {
			setOutputText(decodeText(inputText));
		} else if (type === "generate_joke") {
			setInputText(await fetchJokeAPI());
			setOutputText("");
		}
	};

	return <button onClick={() => onClickHandler(type)}>{children}</button>;
}

export default Button;
