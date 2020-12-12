const decodeText = (text) => {
	let decodedText = "";
	// "y" is considered as a vowel in swedish
	const consonants = "bcdfghjklmnpqrstvwxz";

	let i = 0;

	while (i <= text.length - 1) {
		//  If char is consonent , skip next two encoded characters
		if (consonants.includes(text[i].toLowerCase())) {
			decodedText += text[i];
			i += 3;
		} else {
			decodedText += text[i];
			i += 1;
		}
	}
	return decodedText;
};

export default decodeText;
