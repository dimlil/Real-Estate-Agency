import axios from "axios"

export const logout = async()=>{
   const result = await axios.get(`${process.env.REACT_APP_API_URL}/logout`, { withCredentials: true });
   return result
}