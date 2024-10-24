import "../styles/searchForm.css";

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <form
        action="#"
        className="src-form"
        onSubmit={(e) => {
          e.preventDefault;
        }}
      >
        <input type="text" placeholder="Search..." id="search" />
        {/* TODO: change it to btn */}
        <label htmlFor="search">
          <svg viewBox="0 0 115 105" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="41.039" cy="41.537" rx="35" ry="35.496" />
            <line x1="65.772" y1="61.901" x2="110.068" y2="98.657" />
          </svg>
        </label>
      </form>
    </div>
  );
};
export default Search;
