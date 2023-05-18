import {createAxios as axios} from "../api/server";
import {ITEMS_PER_PAGE} from "../utils/constants";

export const autocompleteMedicamentNames = async (name) => {
    const response = await axios.get("medicaments/medicament-names", {
        params: {
            name
        }
    });
    return response.data.data
}

export const getMedicaments = async (medicamentName, page) => {

    const startTime = new Date().getTime();
    const response = await axios.get("medicaments", {
        params: {
            medicamentName,
            page,
            perPage: ITEMS_PER_PAGE
        }
    })
    const endTime = new Date().getTime();
    const time = (endTime - startTime)/1000;
    return {...response.data, time}
};
