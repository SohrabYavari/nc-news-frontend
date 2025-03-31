import axios from "axios";

export const getArticles = async () => {
    try {
        const response = await axios.get("https://nc-news-backend-769r.onrender.com/api/articles")
        return response.data.articles
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console,error('axios err msg: ', error.message)
        }
        console.log(error)
    }
}
