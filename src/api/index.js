import axios from "axios";





const gameAPI = {
	// const token = sessionStorage.getItem("token");

	// {email, password}
  postRegister(data) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/auth/register`,
      data: data,
    });
  },

	// {email, password}
  postLogin(data) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/auth/login`,
      data: data,
    });
  },

	// шлешь объект сохранения, как тот, что получаешь в логине
  postSave(data) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/auth/save`,
      data: data,
      // headers: {
      //   Authorization: `${token}`,
      //   "Content-Type": "application/json",
      // },
    });
  },

	// получить объект эвента по id
  getStory(id, callback) {
    return axios({
      method: "get",
      url:`https://api.feudalism.ru/api/story/${id}`,
      // headers: {
      //   Authorization: `${token}`,
      //   "Content-Type": "application/json",
      // },
    })
  },

	// закрыть эвент, получить  следующий эвент. временная заплатка вместо карты
  postStory(id) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/story`,
      data: {id: id}
      // headers: {
      //   Authorization: `${token}`,
      //   "Content-Type": "application/json",
      // },
    });
  },

	// получить следующую ситуацию по id текущей
  getSituation(id) {
    return axios({
      method: "get",
      url:`https://api.feudalism.ru/api/situation/${id}`,
      // headers: {
      //   Authorization: `${token}`,
      //   "Content-Type": "application/json",
      // },
    });
  },

	// получить последствия выбора
  getChoice(id) {
    return axios({
      method: "get",
      url:`https://api.feudalism.ru/api/choice/${id}`,
      // headers: {
      //   Authorization: `${token}`,
      //   "Content-Type": "application/json",
      // },
    });
  },
};
export default gameAPI;