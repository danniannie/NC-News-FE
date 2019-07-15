import axios from "axios";
import { async } from "q";

const baseURL = "https://nc-news-dy.herokuapp.com/api";

export const fetchTopics = async () => {
  const { data } = await axios.get(`${baseURL}/topics`);
  return data.topics;
};
