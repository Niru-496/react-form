import "./App.css";
import useForm from "./contents/custom.hook.form";
import validateInfo from "./contents/validateInfo";


function App() {
	const { handleChange, data,errors, handleSubmit } = useForm(validateInfo);

	return (
		<div className="App">
			<form action="submit" onSubmit={handleSubmit}>
				<div>
					<p>
						<label htmlFor="" className="label">
							Full Name :
						</label>
					</p>
					<p>
						<input
							className="input"
							name="name"
							type="text"
							value={data.name}
							onChange={handleChange}
						/>
						{errors.name && <span> * {errors.name}</span>}
					</p>
					<p>
						<label htmlFor="" className="label">
							Email :
						</label>
					</p>
					<p>
						<input
							className="input"
							name="email"
							type="email"
							value={data.email}
							onChange={handleChange}
						/>
						{errors.email && <span> * {errors.email}</span>}
					</p>
					<p>
						<label htmlFor="" className="label">
							Mobile No :
						</label>
					</p>
					<p>
						<input
							className="input"
							name="number"
							type="number"
							value={data.number}
							onChange={handleChange}
						/>
						{errors.number && <span> * {errors.number}</span>}
					</p>
					<p>
						<label htmlFor="" className="label">
							Country
						</label>
					</p>
					<p>
						<input
							className="input"
							name="country"
							type="country"
							value={data.country}
							onChange={handleChange}
						/>
					</p>
					<p>
						<label htmlFor="" className="label">
							city :
						</label>
					</p>
					<p>
						<input
							className="input"
							name="city"
							type="city"
							value={data.city}
							onChange={handleChange}
						/>
					</p>
					<p>
						<label htmlFor="" className="label">
							state :
						</label>
					</p>
					<p>
						<input
							className="input"
							name="state"
							type="state"
							value={data.state}
							onChange={handleChange}
						/>
					</p>
					<p>
						<label htmlFor="" className="label">
							message :
						</label>
					</p>
					<p>
						<input
							className="input"
							name="message"
							type="message"
							value={data.message}
							onChange={handleChange}
						/>
					</p>
				</div>

				<button className="btn" type="submit">
					submit
				</button>
			</form>
		</div>
	);
}

export default App;
