import {createAxios as axios} from "../api/server";

export const autocompleteMedicationNames = async (name) => {
    const response = await axios.get("medicaments/medicament-names", {
        params: {
            name
        }
    });
    return response.data.data
}
