import axios from 'axios'
export const axiosPublic = axios.create({
    baseURL: "https://task-flow-server-74s9.onrender.com"
})