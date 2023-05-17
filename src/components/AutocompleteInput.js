import React from "react"

const AutocompleteInput = ({formValues, setFormValues, fieldName}) => {

    return (
        <input value={formValues[fieldName]} onChange={(e) => {
            setFormValues({...formValues, [fieldName]: e.target.value})
        }}/>
    )

};

export default AutocompleteInput
