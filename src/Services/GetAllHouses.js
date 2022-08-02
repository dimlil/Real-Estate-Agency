import axios from "axios"

export const getAllHouses = async () => {
    const result =  await axios.get(`${process.env.REACT_APP_API_URL}/posts`, { withCredentials: true })
    return result.data
}