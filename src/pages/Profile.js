import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PostPreview from "../components/PostPreview";
import ProfileHeader from "../components/ProfileHeader";
import Placeholder from "../components/Placeholder";
import Loader from "../components/Loader";
import { PostIcon, SavedIcon } from "../components/Icons";
import { getProfile } from "../services/api";

const Wrapper = styled.div`
  .profile-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.4rem 0;
  }

  .profile-tab div {
    display: flex;
    cursor: pointer;
    margin-right: 3rem;
  }

  .profile-tab span {
    padding-left: 0.3rem;
  }

  .profile-tab svg {
    height: 24px;
    width: 24px;
  }

  hr {
    border: 0.5px solid ${(props) => props.theme.borderColor};
  }
`;

const Profile = () => {
  const [tab, setTab] = useState("POSTS");

  const { username } = useParams();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [deadend, setDeadend] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProfile({ username })
      .then((res) => {
        setLoading(false);
        setDeadend(false);
        setProfile(res.data.data);
      })
      .catch((err) => setDeadend(true));
  }, [username]);

  if (!deadend && loading) {
    return <Loader />;
  }

  if (deadend) {
    return (
      <Placeholder
        title="Sorry, this page isn't available"
        text="The link you followed may be broken, or the page may have been removed"
      />
    );
  }

  return (
    <Wrapper>
      <ProfileHeader profile={profile} />
      <hr />

      <div className="profile-tab">
        <div
          style={{ fontWeight: tab === "POSTS" ? "500" : "" }}
          onClick={() => setTab("POSTS")}
        >
          <PostIcon />
          <span>Posts</span>
        </div>
        <div
          style={{ fontWeight: tab === "SAVED" ? "500" : "" }}
          onClick={() => setTab("SAVED")}
        >
          <SavedIcon />
          <span>Saved</span>
        </div>
      </div>

      {tab === "POSTS" && (
        <>
          {profile?.posts?.length === 0 ? (
            <Placeholder
              title="Posts"
              text="Once you start making new posts, they'll appear here"
              icon="post"
            />
          ) : (
            <PostPreview posts={profile?.posts} />
          )}
        </>
      )}

      {tab === "SAVED" && (
        <>
          {profile?.savedPosts?.length === 0 ? (
            <Placeholder
              title="Saved"
              text="Save photos and videos that you want to see again"
              icon="bookmark"
            />
          ) : (
            <PostPreview posts={profile?.savedPosts} />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
