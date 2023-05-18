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

    const response = await axios.get("medicaments", {
        params: {
            medicamentName,
            page,
            perPage: ITEMS_PER_PAGE
        }
    });
    return response.data
};
