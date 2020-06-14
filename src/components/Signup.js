import React from 'react';
import { FormWrapper } from './Login';
import logo from '../assets/logo.png';

const Signup = () => {
	return (
		<FormWrapper>
			<img src={logo} alt="logo" />

			<form>
				<input type="email" placeholder="Email" />
				<input type="text" placeholder="Full Name" />
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<input type="submit" value="Sign up" className="signup-btn" />
			</form>

			<div>
				<p>
					Already have an account? <span>Login</span>
				</p>
			</div>
		</FormWrapper>
	);
};

export default Signup;
