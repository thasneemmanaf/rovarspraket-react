import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "../Button";

function ErrorModal({ errorMessage, setErrorMessage }) {
	// Close the error modal when clicking backdrop
	const closeModal = (e) => {
		setErrorMessage("");
	};

	return (
		<div id="modal" className={styles.modal} onClick={closeModal}>
			<div className={styles.modal_content}>
				<p>{errorMessage}</p>
				<Button type="close" setErrorMessage={setErrorMessage}>
					close
				</Button>
			</div>
		</div>
	);
}

export default ErrorModal;
