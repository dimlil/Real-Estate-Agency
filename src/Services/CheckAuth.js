import axios from "axios"

export const checkAuth = async () => {
    const result =  await axios.get(`${process.env.REACT_APP_API_URL}/verify`, { withCredentials: true })
    return result.data
}