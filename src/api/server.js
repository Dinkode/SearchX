import Axios from "axios";
import {Alert} from "react-native";
import {BACKEND_URL, BACKEND_API_KEY} from '../utils/constants';

export const createAxios = (() => {
    const currentUser = !userUtils.isUserEmpty(store.getState().user.currentUser);
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

            Alert.alert("Error", error.message)
            return Promise.reject(error);
        }
    );
    return axios;
})();
