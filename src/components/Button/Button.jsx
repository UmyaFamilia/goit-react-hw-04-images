const LoadMore = ({ nextPage }) => {
  const showMore = () => {
    nextPage();
  };
  return (
    <div className="Button-cover">
      <button className="Button" onClick={showMore}>
        Load More
      </button>
    </div>
  );
};
export default LoadMore;
