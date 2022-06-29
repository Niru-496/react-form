const validateInfo = (data) => {
	let errors = {};

	if (!data.name.trim()) {
		errors.name = "name required";
	}

	if (!data.email) {
		errors.email = "Email required";
	} else if (!/\S+@\S+\.\S+/.test(data.email)) {
		errors.email = "Email address is invalid";
	}
	if (!data.number) {
		errors.number = "number is required";
	} else if (data.number.length < 10) {
		errors.password = "number needs to be 10 characters or more";
	}
	return errors;
}

export default validateInfo

