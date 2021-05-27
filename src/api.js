import axios from "axios";

export const fetchData = async (URL) => {
    try {
        const {data} = await axios.get(URL)
        // console.log(data)
        return data
    } catch (e) {
        alert(e)
    }
}


export const fetchPostData = async (URL) => {
    try {
        const {data} = await axios.post(URL)
        // console.log(data)
        return data
    } catch (e) {
        alert(e)
    }
}