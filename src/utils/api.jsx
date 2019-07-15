import axios from "axios";

const baseURL = "https://nc-news-dy.herokuapp.com/api";

export const fetchTopics = async () => {
  const { data } = await axios.get(`${baseURL}/topics`);

  return data.topics;
};

export const fetchArticles = async topic => {
  const { data } = await axios.get(`${baseURL}/articles`, {
    params: { topic }
  });

  return data.articles;
};
