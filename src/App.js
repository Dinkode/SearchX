import {useState} from "react";
import AutocompleteInput from "./components/AutocompleteInput";
import React from "react"
import Pagination from "./components/Pagination";

function App() {

    const [items, setItems] = useState({total:0, lastPage:0, data:[]});
    const [currentPage, setCurrentPage] = useState(null);

    const renderItems = () => {
        const data = items.data?.map((item, index) => {
            return <article key={'item'+index}>
                <h3><a href={"#"}>{item.name}</a></h3>
                <p>{item.description}</p>
            </article>
        });
        return <section className='items'>{data}</section>
    };

    const pagination = items.data.length ? <Pagination currentPage={currentPage} totalElements={items.total} setCurrentPage={setCurrentPage}/> : null;

    return (
        <div className='search'>
            <AutocompleteInput setItems={setItems} setCurrentPage={setCurrentPage} page={currentPage}/>
            {renderItems()}
            {pagination}
        </div>
    );
}

export default App;
