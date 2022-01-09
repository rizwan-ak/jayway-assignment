import axios from "axios";
const api = axios.create({ baseURL: "https://randomuser.me/api/" });

export const fetchUsers = async (pageNumber, filteredUsers, callBack) => {
  try {
    const response = await api.get(
      `?page=${pageNumber}&results=6&seed=abc?nat=gb`
    );
    callBack([...filteredUsers, ...response?.data?.results]);
  } catch (err) {
    console.error(err);
  }
};
