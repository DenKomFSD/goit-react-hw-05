export default function SearchBar({ searchValue, onSubmit }) {
  const onSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.query.value;
    console.log(value);
    // console.log(event.target.query);
    // if (!value) {
    //   toast.error("Your search term is empty", {
    //     style: {
    //       color: "#ffffff",
    //       backgroundColor: "red",
    //     },
    //   });
    //   return;
    // }
    onSubmit(value);
    // form.reset();
  };
  return (
    <>
      <form onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search films.."
          name="query"
          value={searchValue}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
