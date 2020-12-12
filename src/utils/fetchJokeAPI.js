import axios from "axios";

const fetchJokeAPI = async (setErrorMessage) => {
	try {
		const response = await axios.get(
			"https://sv443.net/jokeapi/v2/joke/Any?type=single"
		);
		return response.data.joke;
	} catch {
		setErrorMessage("Something went wrong! Please try again later");
	}
};

export default fetchJokeAPI;
