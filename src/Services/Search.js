import axios from "axios"

export const searchQuery = async (search) => {
    const result =  await axios.post(`${process.env.REACT_APP_API_URL}/search`, {
        search
    } ,{ withCredentials: true })
    return result.data
}