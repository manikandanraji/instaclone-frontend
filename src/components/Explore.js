import React, { useState, useEffect } from "react";
import ProfilePreview from "./ProfilePreview";
import { getUsers } from "../services/api";

const Explore = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then(response => setUsers(response.data.data));
	}, []);

	return (
		<>
			<h2>User Suggestions</h2>
			<div style={{ display: "flex", marginTop: "0.8rem" }}>
				{users.map(user => (
					<ProfilePreview key={user.username} user={user} />
				))}
			</div>
		</>
	);
};

export default Explore;
