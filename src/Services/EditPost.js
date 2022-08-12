import axios from "axios"

export const editPost = async (id, name, type, year, city, imgUrl, propertyDescription, availablePieces) => {
    if (name == '' || type == '' || city == '' || imgUrl == '' || propertyDescription == '' || availablePieces == '') {
        return { data: "All fields must be filled" }
    }
    const result = await axios.put(`${process.env.REACT_APP_API_URL}/edit/${id}`, {
        name, type, year, city, imgUrl, propertyDescription, availablePieces
    }, { withCredentials: true });
    return result;
}