import React from 'react';

const SearchResultItem = ({item}) => {
    return (
        <div className="searchResult">
        <p>{item.styleName}</p>
        <img src={item.colours[0].images.detail.src}></img>
        </div>
    );
}

export default SearchResultItem;
