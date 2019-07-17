import axios from "axios";

const baseURL = "https://nc-news-dy.herokuapp.com/api";

export const fetchTopics = async () => {
  const { data } = await axios.get(`${baseURL}/topics`);

  return data.topics;
};

export const fetchArticles = async (topic, sort_by, order) => {
  const { data } = await axios.get(`${baseURL}/articles`, {
    params: { topic, sort_by, order }
  });

  return data.articles;
};

export const fetchArticlebyId = async article_id => {
  const { data } = await axios.get(`${baseURL}/articles/${article_id}`);
  return data.article;
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${baseURL}/articles/${article_id}/comments`
  );
  return data.comments;
};

export const postComment = async (comment, article_id) => {
  const { data } = await axios.post(
    `${baseURL}/articles/${article_id}/comments`,
    comment
  );
  return data.comment;
};
