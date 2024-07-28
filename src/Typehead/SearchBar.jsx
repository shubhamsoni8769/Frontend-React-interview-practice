import { useState } from "react";
import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import List from "./List/List";


const SearchBar = ({
  id,
  name,
  placeholder,
  renderItem,
  debounceTime,
  label,
  noItemFound,
  errorMessage,
  fetchData,
}) => {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, debounceTime);
  const [data, isLoading, error] = useFetch(fetchData, debounceQuery);
  const [activeIndex,setActiveIndex] = useState(0)
  console.log(data);

  const handleKeyUp =(e) => {
    if(!data?.length) return;
    if(e.key === "ArrowUp"){
        if(activeIndex === 0){
            setActiveIndex(data.length - 1)
        }else{
            setActiveIndex(activeIndex-1)
        }
    } else if(e.key === "ArrowDown") {
        if(activeIndex === data.length -1) {
            setActiveIndex(0)
        }else{
            setActiveIndex(activeIndex + 1)
        }
    }
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyUp}
        name={name}
      />
        {error ? errorMessage : ""}

        {data?.length > 0 && <List data={data} renderItem={renderItem} activeIndex={activeIndex}/>}
    </>
  );
};

export default SearchBar;
