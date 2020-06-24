import React, { useContext } from "react";
import { toast } from "react-toastify";
import { client } from "../utils";
import { FormWrapper } from "./Login";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";

import logo from "../assets/logo.png";
const Signup = ({ login }) => {
  const { setUser } = useContext(UserContext);
  const email = useInput("");
  const fullname = useInput("");
  const username = useInput("");
  const password = useInput("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value || !username.value || !fullname.value) {
      return toast.error("Please fill in all the fields");
    }

    if (username.value === "explore") {
      return toast.error(
        "The username you entered is not acceptable, try again"
      );
    }

    const re = /^[a-z0-9]+$/i;
    if (re.exec(username.value) === null) {
      return toast.error(
        "The username you entered is not acceptable, try again"
      );
    }

    const body = {
      email: email.value,
      password: password.value,
      username: username.value,
      fullname: fullname.value,
    };

    try {
			const { token } = await client('/auth/signup', { body })
			localStorage.setItem('token', token)
    } catch (err) {
      return toast.error(err.message);
    }

		const user = await client('/auth/me')
    setUser(user.data);
    localStorage.setItem("user", JSON.stringify(user.data));

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
