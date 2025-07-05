
 function StateSelector({ states, selectedState, onChange }) {
  return (
    <select
      className="w-10 bg-transparent outline-none cursor-pointer h-100 text-deepGreen text-13px"
      value={selectedState}
      onChange={onChange}
    >
       
      {Array.isArray(states) &&
        states.map((state) => (
          <option key={state} value={state} className="dark:bg-[#404040] dark:text-textGray">
            {state}
          </option>
        ))}
    </select>
  );
}


export default StateSelector