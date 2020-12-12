import axios from "axios";

const fetchJokeAPI = async () => {
	try {
		const response = await axios.get(
			"https://sv443.net/jokeapi/v2/joke/Any?type=single"
		);
		return response.data.joke;
	} catch {
		console.log("err");
	}
};

export default fetchJokeAPI;
