import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full bg-gray-200 rounded-3xl">
      <input
        type="text"
        className="flex-1 text-black bg-transparent focus:outline-none px-4 py-5"
        placeholder="Tìm kiếm..."
      />

      <button className="px-4 py-5 bg-slate-600 rounded-r-3xl active:bg-slate-500">
        <SearchIcon className="mr-1" />
        Tìm kiếm
      </button>
    </div>
  );
};

export default SearchBar;
