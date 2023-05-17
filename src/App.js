import {useEffect, useState} from "react";
import {autocompleteMedicationNames} from "./actions/searchActions";
import AutocompleteInput from "./components/AutocompleteInput";
import {FIELD_NAMES} from "./utils/constants";
import React from "react"

function App() {

    const [formValues, setFormValues] = useState({[FIELD_NAMES.AUTOCOMPLETE]: ''});

    const setFormValuesAndGetAutocomplete = async (formValues) => {
        setFormValues(formValues)
        await autocompleteMedicationNames(formValues[FIELD_NAMES.AUTOCOMPLETE])
    };


    return (
        <div>
            SearchX
            <AutocompleteInput formValues={formValues} setFormValues={setFormValuesAndGetAutocomplete}
                               fieldName={FIELD_NAMES.AUTOCOMPLETE}/>
        </div>
    );
}

export default App;
