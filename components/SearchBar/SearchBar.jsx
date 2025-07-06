import { CiSearch } from "react-icons/ci";


function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="flex items-center pl-1 border h-40px lg:w-30 md:w-60 text-textGray dark:bg-iconBg rounded-3xl border-iconBg">
      
      <CiSearch className="text-20px" />
      
      <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search..."
      className="pl-1 text-sm text-black bg-transparent border-none rounded-md outline-none dark:text-white h-100 w-90 placeholder:text-textGray"
    />
    </div>
  );
}


export default SearchBar;