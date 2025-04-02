import axios from "axios";

const apiUrl = "https://nc-news-backend-769r.onrender.com";

export const getArticles = async () => {
  try {
    const response = await axios.get(apiUrl + "/api/articles");
    return response.data.articles;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console, error("axios err msg: ", error.message);
    }
    console.error('Error: ',error);
  }
};

export const getArticleById = async (articleId) => {
  try {
    const response = await axios.get(apiUrl + `/api/articles/${articleId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console, error("axios err msg: ", error.message);
    }
    console.error('Error: ',error);
  }
};

export const getArticleComments = async (articleId) => {
  try {
    const response = await axios.get(apiUrl + `/api/articles/${articleId}/comments`)
    return response.data
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('axios error: ', error)
    }
    console.error('Error', error)
  }
}