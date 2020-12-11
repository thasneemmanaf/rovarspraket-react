import React from "react";
import InputArea from "../../components/InputArea";
import Button from "../../components/Button";
import OutputArea from "../../components/OutputArea";
import styles from "./HomePage.module.css";

function HomePage() {
	return (
		<div>
			<div className={styles.btns}>
				<Button>Generate a Random Joke</Button>
			</div>

			<InputArea />
			<div className={styles.btns}>
				<Button>Encode</Button>
				<Button>Decode</Button>
			</div>
			<OutputArea />
		</div>
	);
}

export default HomePage;
