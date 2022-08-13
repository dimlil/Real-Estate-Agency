import axios from "axios"

async function checkAuth() {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/verify/`, { withCredentials: true });
    return result.data
}
export default checkAuth