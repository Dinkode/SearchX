import {useEffect, useState} from "react";
import {autocompleteMedicamentNames, getMedicaments} from "./actions/searchActions";
import AutocompleteInput from "./components/AutocompleteInput";
import {FIELD_NAMES} from "./utils/constants";
import React from "react"

function App() {

    const [items, setItems] = useState({total:0, lastPage:0, data:[]});


    const renderItems = () => {
        return items.data?.map((item, index) => {
            return <div>
                <h2>{item.name}</h2>
            </div>
        })
    };

    return (
        <div className='search'>
            <AutocompleteInput setItems={setItems}/>
            {renderItems()}
        </div>
    );
}

export default App;
