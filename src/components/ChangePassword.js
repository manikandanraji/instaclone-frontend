import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import { Wrapper } from "./ProfileForm";

const buttonStyle = {
	marginLeft: '13rem'
}

const labelStyle = {
	width: '200px'
}


const ChangeAvatar = () => {
	return (
		<Wrapper>
			<form>
				<div className="input-group">
					<label style={labelStyle} className="bold">Old Password</label>
					<input type="password" />
				</div>
				<div className="input-group">
					<label style={labelStyle} className="bold">New Password</label>
					<input type="password" />
				</div>
				<div className="input-group">
					<label style={labelStyle} className="bold">Confirm New Password</label>
					<input type="password" />
				</div>
				<Button style={buttonStyle}>Submit</Button>
			</form>
		</Wrapper>
	);
};

export default ChangeAvatar;
