import React from "react";
import "./Button.module.css";

function Button({ children, type, inputText, setOutputText }) {
	const onClickHandler = (type) => {
		if (type === "encode") {
			setOutputText(inputText);
		}
	};

	return <button onClick={() => onClickHandler(type)}>{children}</button>;
}

export default Button;
