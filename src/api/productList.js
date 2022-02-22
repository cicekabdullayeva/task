import Api from "./index";

const getData = () => {
  return Api.get(`/`).then((res) => res.data);
};

export { getData };
