import axios from 'axios'

const api = axios.create({
    baseURL: 'https://experimental-lv1h9hgy6-navneetkumar123.vercel.app/',
})

export const register = payload => api.post(`/user/register`, payload)
export const login = payload => api.post(`/user/login`, payload)
export const createBook = payload => api.post('/book', payload)
export const getAllBooks = payload => api.get('/book', payload)

const apis = {
  register,
  login,
  createBook,
  getAllBooks,
}

export default apis