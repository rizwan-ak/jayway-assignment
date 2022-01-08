import axios from "axios";
const api = axios.create({ baseURL: "https://randomuser.me/api/" });

export const fetchUsers = async (callBack) => {
  try {
    const response = await api.get(`?results=6`);
    callBack(response?.data?.results);
  } catch (err) {
    console.error(err);
  }
};
