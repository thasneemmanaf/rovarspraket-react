import React from "react";
import InputArea from "../../components/InputArea";
import Button from "../../components/Button";
import styles from "./HomePage.module.css";

function HomePage() {
	return (
		<div>
			<div className={styles.btns}>
				<Button />
			</div>

			<InputArea />
			<div className={styles.btns}>
				<Button />
				<Button />
			</div>
		</div>
	);
}

export default HomePage;
