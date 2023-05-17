import Axios from "axios";
import {BACKEND_URL, BACKEND_API_KEY} from '../utils/constants';

export const createAxios = (() => {
    const axios = Axios.create({
        baseURL: BACKEND_URL,
        headers: {
            code:BACKEND_API_KEY,
            language: "EN"
        }
    });
    axios.interceptors.request.use(
        conf => {

            return conf;
        },
        error => {

            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        response => {

            return response;
        },
        error => {

            return Promise.reject(error);
        }
    );
    return axios;
})();
