import axios from "axios";

export const axiosApi = axios.create();

axiosApi.defaults.headers.common["Authorization"] = `Bearer ${'localStorage.getItem("token")'}`;
axiosApi.defaults.baseURL = "http://192.168.2.63:8080";

export async function get(url: string, data: any) {
  return await axiosApi
    .get(url, { ...data })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response?.status == 401) {
        window.location.href = `/`;
      }
      return Promise.reject(new Error(err.response?.data || err.message));
    });
}

export async function post(url: string, data: any) {
  return axiosApi
    .post(url, { ...data })
    .then((response) => response.data)
    .catch((err) => {
        console.log(err)
      if (err.response?.status == 401) {
        window.location.href = `/`;
      }
      return Promise.reject(new Error(err.response?.data || err.message));
    });
}

export async function put(url: string, data: any) {
  return axiosApi
    .put(url, { ...data })
    .then((response) => response.data)
    .catch((err) => {
      if (err.response?.status == 401) {
        window.location.href = `/`;
      }
      return Promise.reject(new Error(err.response?.data || err.message));
    }); //
}

export async function del(url: string, data: any) {
  return await axiosApi
    .delete(url, { ...data })
    .then((response) => response.data)
    .catch((err) => {
      if (err.response?.status == 401) {
        window.location.href = `/`;
      }
      return Promise.reject(new Error(err.response?.data || err.message));
    });
}
