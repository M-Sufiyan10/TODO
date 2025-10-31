import axios from "axios"



const api = axios.create({
    baseURL : `${import.meta.env.VITE_BACKEND_APP_API_URL}`,
    withCredentials: true, // needed if backend uses cookies
    headers: { 'Content-Type': 'application/json' },
})

export default api