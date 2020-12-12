import React from "react";
import "./Button.module.css";
import encodeText from "../../utils/encodeText";
import decodeText from "../../utils/decodeText";
import fetchJokeAPI from "../../utils/fetchJokeAPI";

function Button({ children, type, inputText, setOutputText, setInputText }) {
	const onClickHandler = async (type) => {
		if (type === "encode") {
			setOutputText(encodeText(inputText));
		} else if (type === "decode") {
			setOutputText(decodeText(inputText));
		} else if (type === "generate_joke") {
			setInputText(await fetchJokeAPI());
		}
	};

	return <button onClick={() => onClickHandler(type)}>{children}</button>;
}

export default Button;
