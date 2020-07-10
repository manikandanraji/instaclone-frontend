# Instaclone Frontend

Instagram clone using MERN stack. 

This is the frontend repo built with React. If you are looking for the backend repo, [click here](https://github.com/manikandanraji/instaclone-backend)

[Check out the deployed site](https://instaclone2.netlify.app)

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
![Home](screenshots/home.png)

### Explore
![Explore](screenshots/explore.png)


### Followers
![Followers](screenshots/followers.png)


### Profile
![Profile](screenshots/profile.png)

### Edit Profile
![Edit Profile](screenshots/edit_profile.png)

### New Post
![New Post](screenshots/new_post.png)
