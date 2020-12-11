import React from "react";
import styles from "./OutputArea.module.css";

function OutputArea({ outputText }) {
	return (
		<div className={styles.outputArea}>
			<p className={styles.outputText}>{outputText}</p>
		</div>
	);
}

export default OutputArea;
