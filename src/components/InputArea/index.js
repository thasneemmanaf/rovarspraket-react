import React from "react";
import styles from "./InputArea.module.css";

function InputArea({ inputText, setInputText }) {
	const onChangeHandler = (e) => {
		setInputText(e.target.value);
	};

	return (
		<textarea
			className={styles.inputArea}
			placeholder="Please enter your joke here or hit JOKE OF THE DAY button"
			rows="5"
			cols="60"
			value={inputText}
			onChange={onChangeHandler}></textarea>
	);
}

export default InputArea;
