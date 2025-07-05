 function RegionSelector({ regions, selectedRegion, onChange }) {
  return (
    <select
      className="w-10 bg-transparent outline-none cursor-pointer h-100 text-deepGreen text-13px"
      value={selectedRegion}
      onChange={onChange}
    >
      <option value="All" className="dark:bg-[#404040] dark:text-textGray">All</option>
      {regions.map((region) => (
        <option key={region} value={region} className="cursor-pointer dark:bg-[#404040] dark:text-textGray">
          {region}
        </option>
      ))}
    </select>
  );
}


export default RegionSelector;