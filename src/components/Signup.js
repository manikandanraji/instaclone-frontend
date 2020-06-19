import React, { useContext } from "react";
import { authenticate, me } from "../services/api";
import { FormWrapper } from "./Login";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";

import logo from "../assets/logo.png";
const Signup = ({ login }) => {
	const { setUser } = useContext(UserContext)
	const email = useInput("");
	const fullname = useInput("");
	const username = useInput("");
	const password = useInput("");

	const handleLogin = async e => {
		e.preventDefault();

		const body = {
			email: email.value,
			password: password.value,
			username: username.value,
			fullname: fullname.value
		};

		const tokenResponse = await authenticate({ url: "/auth/signup", body });

		const userResponse = await me({
			url: "/auth/me",
			token: tokenResponse.data.token
		});

		userResponse.data.data.token = tokenResponse.data.token;

		localStorage.setItem("user", JSON.stringify(userResponse.data.data));
		setUser(userResponse.data.data);

		fullname.setValue("");
		username.setValue("");
		password.setValue("");
		email.setValue("");
	};

	return (
		<FormWrapper onSubmit={handleLogin}>
			<img src={logo} alt="logo" />

			<form>
				<input
					type="email"
					placeholder="Email"
					value={email.value}
					onChange={email.onChange}
				/>
				<input
					type="text"
					placeholder="Full Name"
					value={fullname.value}
					onChange={fullname.onChange}
				/>
				<input
					type="text"
					placeholder="Username"
					value={username.value}
					onChange={username.onChange}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password.value}
					onChange={password.onChange}
				/>
				<input type="submit" value="Sign up" className="signup-btn" />
			</form>

			<div>
				<p>
					Already have an account? <span onClick={login}>Login</span>
				</p>
			</div>
		</FormWrapper>
	);
};

export default Signup;
