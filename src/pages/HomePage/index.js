import React, { useState } from "react";
import InputArea from "../../components/InputArea";
import Button from "../../components/Button";
import OutputArea from "../../components/OutputArea";
import styles from "./HomePage.module.css";

function HomePage() {
	const [inputText, setInputText] = useState("");

	return (
		<div>
			<div className={styles.btns}>
				<Button>Generate a Random Joke</Button>
			</div>

			<InputArea inputText={inputText} setInputText={setInputText} />
			<div className={styles.btns}>
				<Button>Encode</Button>
				<Button>Decode</Button>
			</div>
			<OutputArea />
		</div>
	);
}

export default HomePage;
