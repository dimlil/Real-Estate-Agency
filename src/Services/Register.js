import axios from "axios"
export const register = async(name, username, password) => {
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            username,
            password
        }, { withCredentials: true });
        return 'User Is Successfuly Register'
    } catch (error) {
        if (error) {
            return error.massege
        }
    }
}