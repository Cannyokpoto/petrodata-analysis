// components/PeriodSelector.jsx

const periodOptions = [
  "1D",
  "1W",
  "1M",
  "3M",
  "6M",
  "YTD",
  "All",
];


function PeriodSelector({ selectedPeriod, onChange }) {
  return (
    <div className="flex w-auto gap-2 pl-2 text-13px">
      {periodOptions.map((period) => (
        <button
          key={period}
          onClick={() => onChange({ target: { value: period } })}
          className={`transition py-0.5 ${
            selectedPeriod === period
              ? "border-t-2 border-deepGreen text-deepGreen"
              : "text-textGray"
          }`}
        >
          {period}
        </button>
      ))}
    </div>
  );
}


export default PeriodSelector;