import React, { useState } from "react";
import InputArea from "../../components/InputArea";
import Button from "../../components/Button";
import OutputArea from "../../components/OutputArea";
import ErrorModal from "../../components/ErrorModal";
import styles from "./HomePage.module.css";

function HomePage() {
	const [inputText, setInputText] = useState("");
	const [outputText, setOutputText] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	return (
		<div className={styles.container}>
			<div className={styles.btns}>
				<Button
					type="generate_joke"
					inputText={inputText}
					setOutputText={setOutputText}
					setInputText={setInputText}
					setErrorMessage={setErrorMessage}>
					Joke of the Day
				</Button>
			</div>
			<InputArea inputText={inputText} setInputText={setInputText} />
			<div className={styles.btns}>
				<Button
					type="encode"
					inputText={inputText}
					setOutputText={setOutputText}
					setErrorMessage={setErrorMessage}>
					Encode
				</Button>
				<Button
					type="decode"
					inputText={inputText}
					setOutputText={setOutputText}
					setErrorMessage={setErrorMessage}>
					Decode
				</Button>
			</div>
			<OutputArea outputText={outputText} />
			{errorMessage && (
				<ErrorModal
					errorMessage={errorMessage}
					setErrorMessage={setErrorMessage}
				/>
			)}
		</div>
	);
}

export default HomePage;
