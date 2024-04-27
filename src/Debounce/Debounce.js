import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";
import { fetchUsers } from "../common/Utils";

export const Debounce = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleOnClick = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  // const controllRef = useRef(null);
  const debounceSearchVal = useDebounce(search);

  // useEffect(() => {
  //   controllRef.current = new AbortController();
  //   const fetchUsersApi = async () => {
  //     let result = await fetch("https://pokeapi.co/api/v2/evolution-chain?limit=2500",{signal: controllRef.current.signal});
  //     result = await result.json()
  //     const arr = result.results.filter((ele) => {
  //       return ele.url.includes("6")
  //     })
  //     setData(arr);
  //   };
  //   fetchUsersApi();

  //   return () => {
  //     if(controllRef.current){
  //       controllRef.current.abort()
  //     }

  //     console.log("unmount");
  //   }
  // }, [debounceSearchVal]);

  useEffect(() => {
    const fetchUsersApi = async () => {
      const result = await fetchUsers(debounceSearchVal);
      setData(result);
    };
    fetchUsersApi();
  }, [debounceSearchVal]);

  return (
    <>
      <input value={search} type="text" onChange={handleOnClick} />
      <ul>{data?.length > 0 && data.map((ele) => <li>{ele.name}</li>)}</ul>
    </>
  );
};
