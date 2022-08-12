import axios from "axios"
export const register = async (name, username, password, rePassword) => {
    if (name === '' || username === '' || password === '' || rePassword === '') {
        return {data: "All fields must be filled"}
    }
    if (username.length <= 5) {
        return {data: "The username should be at least 5 characters long"}
    }
    if (rePassword !== password) {
        return {data: "Thw Password and the Repeat Password doesn't match"}
    }
    if (password.length <= 4) {
        return {data: "The password should be at least 4 characters long"}
    }
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