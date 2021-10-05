import React from 'react';

const SearchBar = ({setSearchTerm}) => {
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setSearchTerm(document.getElementById("searchbar").value)
        }
    }

    return (
        <div className="p-4">
            <input type="text" id="searchbar" className="h-14 w-full pr-8 pl-8 rounded z-0 shadow-md focus:outline-none"
                   placeholder="Search anything..." onKeyDown={handleKeyDown} />
            <button></button>
        </div>
    );
};

export default SearchBar
