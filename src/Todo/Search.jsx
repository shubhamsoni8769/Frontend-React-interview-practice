import { useState } from "react";

export const Search = ({ addItem }) => {
  const [query, setQuery] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      addItem(e.target.value);
      setQuery("");
    }
  };

  return (
    <>
      <label htmlFor="addItem">Add item</label>
      <input
        id="addItem"
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
