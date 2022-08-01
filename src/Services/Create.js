import axios from "axios"
export const create = async (name, type, year, city, imgUrl, propertyDescription, availablePieces) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/create`, {
            name, type, year, city, imgUrl, propertyDescription, availablePieces
        }, { withCredentials: true });
        return result
    } catch (error) {
        if (error) {
            return error.massege
        }
    }
}