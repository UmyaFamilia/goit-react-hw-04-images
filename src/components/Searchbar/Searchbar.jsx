function Searchbar(props) {
  const find = e => {
    e.preventDefault();
    props.callYouLater(e.target.input.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={find}>
        <button type="submit" className="SearchForm-button">
          Search
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="input"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
