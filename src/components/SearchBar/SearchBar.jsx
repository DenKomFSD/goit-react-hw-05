// import { toast } from "react-hot-toast";

export default function SearchBar({ value, onFilter }) {
  // const onSearch = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const value = form.query.value;

  //   if (!value) {
  //     toast.error("Your search term is empty", {
  //       style: {
  //         color: "#ffffff",
  //         backgroundColor: "red",
  //       },
  //     });
  //     return;
  //   }
  //   onSubmit(value);
  //   // form.reset();
  // };
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
