import React from "react";
import styles from "./InputArea.module.css";

function InputArea() {
	return <textarea className={styles.inputArea} rows="5" cols="40"></textarea>;
}

export default InputArea;
