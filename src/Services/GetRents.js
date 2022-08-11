import axios from "axios"

export const checkRenter=async(id)=>{
    const result =  await axios.get(`${process.env.REACT_APP_API_URL}/check-renter/${id}`, { withCredentials: true })
    return result.data
}