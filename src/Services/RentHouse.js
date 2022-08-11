import axios from "axios"

export const rentAHouse = async (id) => {
    const result = await axios.put(`${process.env.REACT_APP_API_URL}/rent/${id}`, {}, { withCredentials: true })
    return result.status
}