# Instaclone Frontend

**NOTE: As of 10-06-2022 19:49 IST, I am archiving this repository. It was fun while it lasted.**

Instagram clone using MERN stack. 

This is the frontend repo built with React. If you are looking for the backend repo, [click here](https://github.com/manikandanraji/instaclone-backend)

## Core Packages
1. React Router (for routing)
2. Styled Components (for styling)
3. React Toastify (for toast-notifications)

Global state management is taken care of by React Context API. For image uploads, instaclone uses Cloudinary. 

## Running Locally

At the root of the project, you should have a .env with the following contents

```js
REACT_APP_BACKEND_URL=<your_backend_url>
REACT_APP_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/<cloud_name>/upload
```

Then run <code>npm i && npm run start</code> to see the instaclone in action

## UI

### Home 
![Home](screenshots/home_new.png)

### Explore
![Explore](screenshots/explore_new.png)


### Followers
![Followers](screenshots/followers_new.png)


### Profile
![Profile](screenshots/profile_new.png)

### Edit Profile
![Edit Profile](screenshots/edit_profile_new.png)

### New Post
![New Post](screenshots/new_post_new.png)
