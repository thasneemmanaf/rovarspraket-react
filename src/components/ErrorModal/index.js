import React from "react";

import Button from "../Button";

import styles from "./ErrorModal.module.css";

function ErrorModal({ errorMessage, setErrorMessage }) {
	// Close the error modal by clicking the backdrop
	const closeModal = (e) => {
		e.target.id === "modal" && setErrorMessage("");
	};

	return (
		<div id="modal" className={styles.modal} onClick={closeModal}>
			<div className={styles.modalContent}>
				<p>{errorMessage}</p>

				<Button type="close" setErrorMessage={setErrorMessage}>
					CLOSE
				</Button>
			</div>
		</div>
	);
}

export default ErrorModal;
