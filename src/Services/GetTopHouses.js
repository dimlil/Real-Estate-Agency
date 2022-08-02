import axios from "axios"

export const getTopHouses = async () => {
    const result =  await axios.get(`${process.env.REACT_APP_API_URL}/topPosts`, { withCredentials: true })
    return result.data
}