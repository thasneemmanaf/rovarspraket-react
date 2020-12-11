import React from "react";
import "./Button.module.css";
import encodeText from "../../utils/encodeText";

function Button({ children, type, inputText, setOutputText }) {
	const onClickHandler = (type) => {
		if (type === "encode") {
			setOutputText(encodeText(inputText));
		}
	};

	return <button onClick={() => onClickHandler(type)}>{children}</button>;
}

export default Button;
