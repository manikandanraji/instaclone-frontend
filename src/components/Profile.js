import React from "react";
import PostPreview from "./PostPreview";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
	return (
		<>
			<ProfileHeader />
			<hr style={{ border: '0.5px solid #DBDBDB' }} />
			<PostPreview />
		</>
	);
};

export default Profile;
