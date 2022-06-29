import { useState } from "react";


const useForm = (validateInfo) => {
	const [data, Setdata] = useState({
		name: "",
		email: "",
		number: "",
		country: "",
		city: "",
		state: "",
		message: "",
	});
    const [errors,Seterrors] = useState({})
	const handleChange = (e) => {
		const { name, value } = e.target;

		Setdata({ ...data, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		Seterrors(validateInfo(data))
		console.log(data);

	};
	return { handleChange, data,errors, handleSubmit };
};

export default useForm;
