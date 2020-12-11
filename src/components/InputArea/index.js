import React from "react";
import styles from "./InputArea.module.css";

function InputArea({ inputText, setInputText }) {
	const onChangeHandler = (e) => {
		setInputText(e.target.value);
	};

	return (
		<textarea
			className={styles.inputArea}
			placeholder="Please enter your joke here"
			rows="5"
			cols="40"
			value={inputText}
			onChange={onChangeHandler}></textarea>
	);
}

export default InputArea;
