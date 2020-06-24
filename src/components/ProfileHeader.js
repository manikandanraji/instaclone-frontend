import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Follow from "./Follow";
import Modal from "./Modal";
import Button from "../styles/Button";
import { UserContext } from "../context/UserContext";
import { OptionsIcon } from "./Icons";
import { CloseIcon } from "./Icons";

const MobileWrapper = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
  padding-left: 1rem;

  .mobile-profile-stats span {
    padding-right: 1rem;
  }

  .mobile-bio,
  .mobile-profile-stats {
    display: none;
  }

  @media screen and (max-width: 645px) {
    .mobile-bio {
      display: block;
    }

    .mobile-profile-stats {
      display: block;
      margin-bottom: 0.4rem;
    }
  }

  a {
    color: ${(props) => props.theme.blue};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;

  .avatar {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 90px;
    margin-right: 2rem;
  }

  .profile-meta {
    display: flex;
    align-items: baseline;
    margin-bottom: 1rem;
  }

  .profile-meta h2 {
    position: relative;
    top: 3px;
  }

  .profile-stats {
    display: flex;
    margin-bottom: 1rem;
  }

  .options svg {
    position: relative;
    top: 7px;
    margin-left: 1rem;
  }

  span {
    padding-right: 1rem;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  @media screen and (max-width: 645px) {
    font-size: 1rem;

    .bio,
    .profile-stats {
      display: none;
    }

    .avatar {
      width: 140px;
      height: 140px;
    }

    .profile-meta {
      flex-direction: column;
    }

    button {
      margin-left: 0;
    }

    .bio-mobile {
      margin: 1rem 0;
      display: block;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 0.9rem;

    .avatar {
      width: 100px;
      height: 100px;
    }
  }
`;

const modalHeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #DBDBDB",
  padding: "1rem",
};

const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
	padding-right: 2rem;
  font-size: 0.9rem;
  width: 350px;

  img {
    width: 40px;
    object-fit: cover;
    height: 40px;
    border-radius: 20px;
    margin-right: 1rem;
  }

  .profile-info {
    display: flex;
  }

  span {
    color: ${(props) => props.theme.secondaryColor};
  }

  button {
    font-size: 0.9rem;
    position: relative;
    top: -10px;
  }

  @media screen and (max-width: 480px) {
    width: 340px;
  }
`;

const ModalContent = ({ loggedInUser, users, closeModal, title }) => {
  const history = useHistory();

  return (
		<div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <div style={modalHeaderStyle}>
        <h3>{title}</h3>
        <CloseIcon onClick={closeModal} />
      </div>
      {users.map((user) => (
        <ModalContentWrapper key={user._id}>
          <div className="profile-info">
            <img
              className="pointer"
              onClick={() => {
                closeModal();
                history.push(`/${user.username}`);
              }}
              src={user.avatar}
              alt="avatar"
            />
            <div className="user-info">
              <h3
                className="pointer"
                onClick={() => {
                  closeModal();
                  history.push(`/${user.username}`);
                }}
              >
                {user.username}
              </h3>
              <span>{user.fullname}</span>
            </div>
          </div>
          <Follow isFollowing={user.isFollowing} userId={user._id} />
        </ModalContentWrapper>
      ))}
    </div>
  );
};

const ProfileHeader = ({ profile }) => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const [showFollowersModal, setFollowersModal] = useState(false);
  const [showFollowingModal, setFollowingModal] = useState(false);
  const closeModal = () => {
    setFollowersModal(false);
    setFollowingModal(false);
  };

  const [followersState, setFollowers] = useState(0);
  const incFollowers = () => setFollowers(followersState + 1);
  const decFollowers = () => setFollowers(followersState - 1);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("You are logged out");
  };

  useEffect(() => setFollowers(profile?.followersCount), [profile]);

  return (
    <>
      <Wrapper>
        <img className="avatar" src={profile?.avatar} alt="avatar" />
        <div className="profile-info">
          <div className="profile-meta">
            <h2>{profile?.username}</h2>
            {profile?.isMe ? (
              <div className="options">
                <Button
                  secondary
                  onClick={() => history.push("/accounts/edit")}
                >
                  Edit Profile
                </Button>
                <OptionsIcon onClick={handleLogout} />
              </div>
            ) : (
              <Follow
                isFollowing={profile?.isFollowing}
                incFollowers={incFollowers}
                decFollowers={decFollowers}
                userId={profile?._id}
              />
            )}
          </div>

          <div className="profile-stats">
            <span>{profile?.postCount} posts</span>

            <span className="pointer" onClick={() => setFollowersModal(true)}>
              {followersState} followers
            </span>

            <span className="pointer" onClick={() => setFollowingModal(true)}>
              {profile?.followingCount} following
            </span>

            {showFollowersModal && profile?.followers.length > 0 && (
              <Modal>
                <ModalContent
                  loggedInUser={user}
                  users={profile?.followers}
                  title="Followers"
                  closeModal={closeModal}
                />
              </Modal>
            )}

            {showFollowingModal && profile?.following.length > 0 && (
              <Modal>
                <ModalContent
                  loggedInUser={user}
                  users={profile?.following}
                  title="Following"
                  closeModal={closeModal}
                />
              </Modal>
            )}
          </div>

          <div className="bio">
            <span className="bold">{profile?.fullname}</span>
            <p>{profile?.bio}</p>
            <a
              href={profile?.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile?.website}
            </a>
          </div>
        </div>
      </Wrapper>
      <MobileWrapper>
        <div className="mobile-profile-stats">
          <span>{profile?.postCount} posts</span>

          <span className="pointer" onClick={() => setFollowersModal(true)}>
            {followersState} followers
          </span>

          <span className="pointer" onClick={() => setFollowingModal(true)}>
            {profile?.followingCount} following
          </span>

          {showFollowersModal && profile?.followers.length > 0 && (
            <Modal>
              <ModalContent
                loggedInUser={user}
                users={profile?.followers}
                title="Followers"
                closeModal={closeModal}
              />
            </Modal>
          )}

          {showFollowingModal && profile?.following.length > 0 && (
            <Modal>
              <ModalContent
                loggedInUser={user}
                users={profile?.following}
                title="Following"
                closeModal={closeModal}
              />
            </Modal>
          )}
        </div>
        <div className="mobile-bio">
          <span className="bold">{profile?.fullname}</span>
          <p>{profile?.bio}</p>
          <a href={profile?.website} target="_blank" rel="noopener noreferrer">
            {profile?.website}
          </a>
        </div>
      </MobileWrapper>
    </>
  );
};

export default ProfileHeader;
