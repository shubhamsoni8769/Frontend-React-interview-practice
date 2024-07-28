import SearchBar from "./SearchBar";
import "./index.css";

const TypeHead = () => {
  const apiCall = async (query, signal) => {
    let response = await fetch(
      `https://swapi.dev/api/people/?search=${query}`,
      { signal }
    ); //Add signal
    response = await response.json();
    return response.results.slice(0, 10);
  };

  const renderEle = (ele) => {
    return <div key={ele.name}>{ele.name}</div>;
  };
  return (
    <div className="container_search_bar_wrapper">
      <div className="search-bar">
        <SearchBar
          id="search-bar"
          name="search-bar"
          placeholder="search here"
          renderItem={renderEle}
          debounceTime={400}
          label="Enter person Name"
          noItemFound={() => <>No item found</>}
          errorMessage={() => <>Error</>}
          fetchData={apiCall}
        />
      </div>
    </div>
  );
};

export default TypeHead;
