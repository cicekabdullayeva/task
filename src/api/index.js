import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://cybernet.az/demo.php`,
  responseType: "json",
  //   headers: {
  //     "Content-type": "application/json",
  //     "Accept-Language": "Az",
  //   },
});

export default axiosInstance;
