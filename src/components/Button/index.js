import React from "react";
import "./Button.module.css";
import encodeText from "../../utils/encodeText";
import decodeText from "../../utils/decodeText";

function Button({ children, type, inputText, setOutputText }) {
	const onClickHandler = (type) => {
		if (type === "encode") {
			setOutputText(encodeText(inputText));
		} else if (type === "decode") {
			setOutputText(decodeText(inputText));
		}
	};

	return <button onClick={() => onClickHandler(type)}>{children}</button>;
}

export default Button;
