import React from "react";
import Pages from "react-js-pagination";
import {ITEMS_PER_PAGE} from "../utils/constants";

const Pagination = ({currentPage = 1, totalElements = 1, setCurrentPage = () => {}}) => {

    return (
            <div className="text-center align-content-center mt-3 mb-3">
                <Pages
                    activePage={currentPage}
                    itemsCountPerPage={ITEMS_PER_PAGE}
                    totalItemsCount={totalElements}
                    pageRangeDisplayed={10}
                    onChange={setCurrentPage}
                    activeClass={"page-item active"}
                    activeLinkClass={"page-link"}
                    itemClass={"page-item"}
                    linkClass={"page-link"}
                    disabledClass={"page-item disabled"}
                    innerClass={"pagination"}
                    prevPageText={"<"}
                    nextPageText={">"}
                />
            </div>)
};

export default Pagination;
