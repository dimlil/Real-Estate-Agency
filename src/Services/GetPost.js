import axios from "axios"

export const getPost=async(id)=>{
    const result =  await axios.get(`${process.env.REACT_APP_API_URL}/details/${id}`, { withCredentials: true })
    return result.data
}