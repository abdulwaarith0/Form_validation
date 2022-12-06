import { isEmail, isAlphanumberic } from "validator";

export const ValidateInfo = (values) => {
	let errors = {};

	const { username, email, password, password2 } = values;

	const usernameCharactersLength = 6;

	// checks if username is not null or undefined
	if (username === null || username === undefined)
		errors.username = "invalid username";
	// checks if username is an alphanumeric character
	if (!isAlphanumberic(username))
		errors.username = "username must be alphanumeric";
	// checks if username does not exceeds max character length
	else if (username.length < usernameCharactersLength)
		errors.username = `username must not exceed ${usernameCharactersLength} characters`;
	// checks if email is a valid address
	else if (!isEmail(email)) errors.email = "invalid email address";
	// checks if password is not null or undefined or passwords does not matches
	else if (
		password === null ||
		password === undefined ||
		password !== password2
	)
		errors.username = "invalid password";
	return errors;
};
