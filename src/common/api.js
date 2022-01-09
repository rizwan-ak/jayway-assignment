import axios from "axios";
const api = axios.create({ baseURL: "https://randomuser.me/api/" });

export const fetchUsers = async (
  pageNumber,
  filteredUsers,
  setIsError,
  callBack
) => {
  try {
    const response = await api.get(
      `?page=${pageNumber}&results=6&seed=abc?nat=gb`
    );
    callBack([...filteredUsers, ...response?.data?.results]);
    setIsError(false);
  } catch (err) {
    setIsError(true);
    console.error(err);
  }
};
