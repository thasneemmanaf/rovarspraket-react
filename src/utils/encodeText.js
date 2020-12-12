// Implement Rövarspråket encoding
const encodeText = (text) => {
	let encodedText = "";

	// "y" is considered as a vowel in swedish
	const consonants = "bcdfghjklmnpqrstvwxz";

	for (let char of text) {
		let smallChar = char.toLowerCase();
		encodedText += char;

		//  Check if the character is a consonant
		if (consonants.includes(smallChar)) {
			encodedText = encodedText + "o" + char;
		}
	}
	return encodedText;
};

export default encodeText;
