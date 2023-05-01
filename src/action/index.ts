import api from "../api";

export const fetchAllBook = () => async () => {
  const res = await api.get("/books");
  // console.log("sss"+res);
  return res;
};