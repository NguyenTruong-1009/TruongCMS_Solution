import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {

    const [keyword, setKeyword] = useState("");

    return (

        <div className="d-flex">

            <input
                className="form-control"
                value={keyword}
                onChange={(e) =>
                    setKeyword(e.target.value)
                }
            />

            <button
                className="btn btn-primary ms-2"
                onClick={() =>
                    onSearch(keyword)
                }
            >
                Tìm
            </button>

        </div>

    );
};

export default SearchBar;