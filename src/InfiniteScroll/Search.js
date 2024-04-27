import React, { useState } from "react";
import InfiniteScroll from "./InfiniteScroll";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const getData = async (query, pageNumber) => {
    try {
      let response = await fetch(
        `https://pokeapi.co/api/v2/ability/?limit=2500`
      );
      response = await response.json();
      const filterByquery = response.results.filter((ele) =>
        ele.name.includes(query)
      );
      console.log(filterByquery);
      setData(filterByquery);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <input type="text" value={query} onChange={handleChange} />
      {/* <InfiniteScroll
        data={data}
        listData={(ele, index, ref) => <div ref={ref} key={index}>{ele}</div>}
        query={query}
        getData={getData} 
      /> */}
      <InfiniteScroll data={data} />
    </>
  );
};
