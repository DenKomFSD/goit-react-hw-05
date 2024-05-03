// import { toast } from "react-hot-toast";

export default function SearchBar({ value, onFilter }) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search films.."
          name="query"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
