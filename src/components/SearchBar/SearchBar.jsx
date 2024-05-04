import { useState } from "react";
import css from "./SearchBar.module.css";

export default function SearchBar({ onFilter }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(value);
  };

  return (
    <form className={css.formblock} onSubmit={handleSubmit}>
      <input
        className={css.search}
        type="text"
        placeholder="Search films.."
        name="query"
        value={value}
        onChange={handleChange}
      />
      <button className={css.bttn} type="submit">
        Search
      </button>
    </form>
  );
}
