import css from "./SearchBar.module.css";

export default function SearchBar({ value, onFilter }) {
  return (
    <>
      <form className={css.formblock}>
        <input
          className={css.search}
          type="text"
          placeholder="Search films.."
          name="query"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
        <button className={css.bttn} type="submit">
          Search
        </button>
      </form>
    </>
  );
}
