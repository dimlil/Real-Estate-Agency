import axios from "axios"

export const deletePost = async(id) =>{
    const result = await axios.delete(`${process.env.REACT_APP_API_URL}/delete/${id}`,{withCredentials: true});
    return result;
}