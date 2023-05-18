import React, {useEffect, useRef, useState} from "react"
import {autocompleteMedicamentNames, getMedicaments} from "../actions/searchActions";
import magnifier from "../resources/magnifier.svg";
import {getItem, setItem} from "../actions/localStorageActions";
import {LOCAL_STORAGE_TYPES} from "../utils/constants";

const AutocompleteInput = ({setItems}) => {

    const [data, setData] = useState([]);
    const [isFocused, setIsFocused] = useState(true);
    const [value, setValue] = useState("");
    const inputRef = useRef();
    const [history, setHistory] = useState([])

    useEffect(() => {
        getHistoryFromLocalStorage();
        inputRef.current.focus();
        const hideAutocomplete = (e)=>{
            if (e.target.tagName === "HTML") {
                setIsFocused(false)
            }
        }
        document.addEventListener('mousedown', hideAutocomplete)
        return ()=>document.removeEventListener('mousedown', hideAutocomplete)
    }, []);

    const getHistoryFromLocalStorage = async () => {
        const history = await getItem(LOCAL_STORAGE_TYPES.SEARCH_HISTORY);
        setHistory(history);
    };


    const setFormValuesAndGetAutocomplete = async (e) => {
        setValue(e.target.value);
        const response = await autocompleteMedicamentNames(e.target.value);
        setData(response);
        if (!isFocused) {
            setIsFocused(true)
        }
    };

    const onItemClick = async (value) => {
        setValue(value);
        const items = await getMedicaments(value, 1);
        setItems(items);
        setIsFocused(false);
        if (!history.includes(value)) {
            setItem([...history, value], LOCAL_STORAGE_TYPES.SEARCH_HISTORY)
        }
        await getHistoryFromLocalStorage();
    };

    const renderList = () => {
        const items = data.slice(0, 10).map((data, index) => {
            const name = data.name.trim();
            const isInTheHistory = history.includes(name);
            const className = isInTheHistory ? "list-item marked" : "list-item";
            const deleteFromHistory = isInTheHistory ? <span className={"delete-history"}
                                                             onClick={async (e) => {
                                                                 e.stopPropagation();
                                                                 const currentHistory = history.filter(item => item !== name);
                                                                 setItem(currentHistory, LOCAL_STORAGE_TYPES.SEARCH_HISTORY);
                                                                 await getHistoryFromLocalStorage();
                                                             }}>delete</span> : null;
            return <p className={className} onClick={() => onItemClick(name)}>{name}{deleteFromHistory}</p>
        });
        return <div className='list' onBlur={()=>setIsFocused(false)} onBlurCapture={()=>setIsFocused(false)}>
            {items}
        </div>
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const items = await getMedicaments(value, 1);
        setItems(items);
        setIsFocused(false);
        if (!history.includes(value)) {
            setItem([...history, value], LOCAL_STORAGE_TYPES.SEARCH_HISTORY)
        }
        await getHistoryFromLocalStorage();

    };

    const fieldContainerClassName = isFocused ? "autocomplete-field-container focused" : "autocomplete-field-container";

    return (
        <form onSubmit={onSubmit}>
            <div className={fieldContainerClassName}>
                <img src={magnifier} className='magnifier' alt='magnifier'/>
                <input value={value} onChange={setFormValuesAndGetAutocomplete}
                       onClick={() => setIsFocused(true)} ref={inputRef}/>
                {renderList()}
            </div>
        </form>
    )

};

export default AutocompleteInput
