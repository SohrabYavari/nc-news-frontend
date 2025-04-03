import axios from "axios";

const apiUrl = "https://nc-news-backend-769r.onrender.com";

export const getArticles = async (topic, sort_by, order = 'asc') => {
  if (topic) {
    try {
      const response = await axios.get(apiUrl + `/api/articles?topic=${topic}`);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console, error("axios err msg: ", error.message);
      }
      console.error("Error: ", error);
    }
  }

  if (sort_by) {
    try {
      const response = await axios.get(
        apiUrl + `/api/articles?topic=${topic}&sort_by=${sort_by}`
      );
      return response.data.articles;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console, error("axios err msg: ", error.message);
      }
      console.error("Error: ", error);
    }
  }


  try {
    const response = await axios.get(apiUrl + `/api/articles?order=${order}`);
    return response.data.articles;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console, error("axios err msg: ", error.message);
    }
    console.error("Error: ", error);
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
    console.error("Error: ", error);
  }
};

export const getArticleComments = async (articleId) => {
  try {
    const response = await axios.get(
      apiUrl + `/api/articles/${articleId}/comments`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("axios error: ", error);
    }
    console.error("Error", error);
  }
};

export const updateArticleVotes = async (articleId, articleVotes = 1) => {
  try {
    const response = await axios.patch(apiUrl + `/api/articles/${articleId}`, {
      articleVotes,
    });
    return response.data.article;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
  }
};

export const postCommentOnArticle = async (articleId, username, body) => {
  try {
    const { data } = await axios.post(
      apiUrl + `/api/articles/${articleId}/comments`,
      {
        username,
        body,
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("axios Error: ", error);
    }
    console.error("Other Error: ", error);
  }
};

export const deleteCommentOnArticle = async (commentId) => {
  try {
    await axios.delete(apiUrl + `/api/comments/${commentId}`);
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("axios Error: ", error);
    }
    console.error("Other Error: ", error);
  }
};

export const getTopics = async () => {
  try {
    const { data } = await axios.get(apiUrl + `/api/topics`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error: ", error);
    }
  }
};
