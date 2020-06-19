import axios from "axios";

export const api = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL
});

export const authenticate = async ({ url, body }) => await api.post(url, body);

export const me = async ({ url, token }) =>
	await api.get(url, { headers: { Authorization: `Bearer ${token}` } });

export const getUsers = async () => await api.get('/users')


export const getFeed = async () => {
	const { token } = JSON.parse(localStorage.getItem('user'))

	return await api.get('/users/feed', { headers: { Authorization: `Bearer ${token}` } })
}

export const addComment = async ({ postId, body }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.post(`/posts/${postId}/comments`, body, { headers: { Authorization: `Bearer ${token}` } })
}

export const toggleSave = async ({ postId }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.get(`/posts/${postId}/togglesave`, { headers: { Authorization: `Bearer ${token}` } })
}

export const toggleLike = async ({ postId }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.get(`/posts/${postId}/togglelike`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getPost = async ({ postId }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.get(`/posts/${postId}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const editProfile = async ({ body }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.put(`/users`, body, { headers: { Authorization: `Bearer ${token}` } })
}

export const uploadImage = async ({ body }) => {
	return await axios.post('https://api.cloudinary.com/v1_1/douy56nkf/upload', body)
}

export const createPost = async ({ body }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.post(`/posts`, body, { headers: { Authorization: `Bearer ${token}` } })
}

export const deletePost = async ({ postId }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.delete(`/posts/${postId}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const getProfile = async ({ username }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.get(`/users/${username}`, { headers: { Authorization: `Bearer ${token}` } })
}

export const follow = async ({ url }) => {
	const { token } = JSON.parse(localStorage.getItem('user'))
	return await api.get(url, { headers: { Authorization: `Bearer ${token}` } })
}
