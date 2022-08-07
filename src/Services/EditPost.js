import axios from "axios"

export const editPost = async (id, name, type, year, city, imgUrl, propertyDescription, availablePieces) => {
    const result = await axios.put(`${process.env.REACT_APP_API_URL}/edit/${id}`, {
        name, type, year, city, imgUrl, propertyDescription, availablePieces
    }, { withCredentials: true });
    return result;
}