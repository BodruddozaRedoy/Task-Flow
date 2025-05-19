import axios from 'axios'
export const axiosPublic = axios.create({
    baseURL: "https://taskflow-server-drab.vercel.app"
})