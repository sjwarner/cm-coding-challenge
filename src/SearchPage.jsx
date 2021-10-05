import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResultItem from "./SearchResultItem";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
      // setLoading(true);
      if (searchTerm) {
          axios.get(`${process.env.REACT_APP_SEARCH_URL}${searchTerm}?sortBy=price-asc&limit=10`)
              .then(response => setData(response.data));
          // .then(() => setLoading(false));
      }
  }, [searchTerm]);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      {
        data?.items
          ?
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-8 p-4">
            {data.items.map((item) => {
              return (
                <SearchResultItem item={item} />
              )
            })}
          </div>
          : 'Search for something!'
      }
    </div>
  );
}

export default SearchPage;
