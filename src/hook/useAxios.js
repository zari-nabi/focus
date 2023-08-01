import axios from "axios";
import { baseUrl } from "../services/baseUrl";

const useAxios = () => {
  return axios.create({ baseURL: baseUrl });
};

export default useAxios;
