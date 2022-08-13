import axios from "axios"
export const login = async(username, password) => {
    if(username==='' || password===''){
        return {data: "Username or Password must be filled"}
    }
    try {
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
            username,
            password
        }, { withCredentials: true });
        return result
    } catch (error) {
        if (error) {
            return error.response
        }
    }
}