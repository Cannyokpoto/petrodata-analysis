"use client";

import { useEffect, useState } from "react";
import PriceCardGroup from "../PriceCardGroup/PriceCardGroup";
import ChartCard from "../ChartCard/ChartCard";
import StateSelector from "../StateSelector/StateSelector";
import ProductSelector from "../ProductSelector/ProductSelector";
import PeriodSelector from "../PeriodSelector/PeriodSelector";
import RegionSelector from "../RegionSelector/RegionSelector";
import WeeklyRecord from "../WeeklyRecord/WeeklyRecord";
import SummaryModal from "../SummaryModal/SummaryModal";
import { getContext } from "@/Context/Context";
import Spinner from "../Spinner/Spinner";

function AnalysisContainer() {
  //from context
  const { summary, setSummary, loading, setLoading } = getContext();

  //state to manage mock data, filtering
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("Abuja");
  const [currentPrices, setCurrentPrices] = useState({});
  const [priceHistory, setPriceHistory] = useState({
    labels: [],
    datasets: [],
  });
  const [performance, setPerformance] = useState({});
  const [selectedProduct, setSelectedProduct] = useState("PMS");
  const [selectedPeriod, setSelectedPeriod] = useState("6M");
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    //show the spinner while fetching data
    setLoading(true);

    //fetch data
    fetch("/data/petro_data.json")
      .then((res) => res.json())
      .then((json) => {
        const petroData = json.PetroData;

        //update state
        setData(petroData);

        //create an array of unique regions that contains only the distinct regions
        const uniqueRegions = [...new Set(petroData.map((d) => d.Region))];

        //create an array of unique states that contains only the distinct states
        const uniqueStates = [...new Set(petroData.map((d) => d.State))];

        // update their states
        setRegions(uniqueRegions);
        setStates(uniqueStates);

        //call the calculateMetrics function
        calculateMetrics(petroData, selectedState);
      })
      .finally(() => setLoading(false)); //set loading to false to stop the spinner as data is successfully loaded
  }, []);

  const calculateMetrics = (petroData, state) => {
    //filter selected state
    const stateData = petroData
      .filter((d) => d.State === state)
      .sort((a, b) => new Date(b.Period) - new Date(a.Period));

    //destructure the most recent and previous record
    const [latest, prev] = [stateData[0], stateData[1]];

    //check the difference in price for each product
    const calcChange = (key) => (latest[key] - prev[key]).toFixed(2);

    //calculte the percentage change
    const calcPercent = (key) =>
      (((latest[key] - prev[key]) / prev[key]) * 100).toFixed(2);

    //update the currentPrices state
    setCurrentPrices({
      PMS: latest.PMS,
      AGO: latest.AGO,
      DPK: latest.DPK,
      LPG: latest.LPG,
    });

    //update the performance state
    setPerformance({
      PMS: { change: calcChange("PMS"), percent: calcPercent("PMS") },
      AGO: { change: calcChange("AGO"), percent: calcPercent("AGO") },
      DPK: { change: calcChange("DPK"), percent: calcPercent("DPK") },
      LPG: { change: calcChange("LPG"), percent: calcPercent("LPG") },
    });

    //call the updatePriceHistory function
    updatePriceHistory(stateData, selectedProduct);
  };

  //update price history based on selected state, product or period
  const updatePriceHistory = (stateData, product, period = selectedPeriod) => {
    const filtered = filterByPeriod(stateData, period);

    //update state for data visualization on chart
    setPriceHistory({
      labels: filtered.map((d) => d.Period).reverse(),
      datasets: [
        {
          label: `${product} Price`,
          data: filtered.map((d) => d[product]).reverse(),
          fill: false,
          borderColor: "#12B76A",
          borderWidth: 1,
          tension: 0.3,
        },
      ],
    });
  };

  //to handle period selection (1D, 1W, 1M etc)
  const handlePeriodChange = (e) => {
    const newPeriod = e.target.value;
    setSelectedPeriod(newPeriod);

    const stateData = data
      .filter((d) => d.State === selectedState)
      .sort((a, b) => new Date(b.Period) - new Date(a.Period));

    updatePriceHistory(stateData, selectedProduct, newPeriod);
  };

  const filterByPeriod = (data, period) => {
    if (period === "All") return data;

    const now = new Date();
    const cutoff = {
      "1D": new Date(now.setDate(now.getDate() - 1)),
      "1W": new Date(now.setDate(now.getDate() - 7)),
      "1M": new Date(now.setMonth(now.getMonth() - 1)),
      "3M": new Date(now.setMonth(now.getMonth() - 3)),
      "6M": new Date(now.setMonth(now.getMonth() - 6)),
      YTD: new Date(now.setFullYear(now.getFullYear() - 1)),
    }[period];

    return data.filter((d) => new Date(d.Period) >= cutoff);
  };

  //to handle state selection
  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    calculateMetrics(data, newState);
  };

  //to handle product selection (PMS, AGO, DPK, LPG)
  const handleProductChange = (e) => {
    const newProduct = e.target.value;
    setSelectedProduct(newProduct);

    const stateData = data
      .filter((d) => d.State === selectedState)
      .sort((a, b) => new Date(b.Period) - new Date(a.Period));

    updatePriceHistory(stateData, newProduct);
  };

  //to handle region selection
  const handleRegionChange = (e) => {
    const newRegion = e.target.value;
    setSelectedRegion(newRegion);

    const filtered = data.filter((d) =>
      newRegion === "All" ? true : d.Region === newRegion
    );

    const updatedStates = [...new Set(filtered.map((d) => d.State))];
    setStates(updatedStates);

    if (updatedStates.length > 0) {
      const newState = updatedStates[0];
      setSelectedState(newState);
      calculateMetrics(data, newState);
    }
  };

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Update region list only once, when data is first loaded
    const uniqueRegions = [...new Set(data.map((d) => d.Region))];
    setRegions(uniqueRegions);

    // Filter states by selected region
    const filtered =
      selectedRegion === "All"
        ? data
        : data.filter((d) => d.Region === selectedRegion);

    const uniqueStates = [...new Set(filtered.map((d) => d.State))];
    setStates(uniqueStates);

    //automatically select first state in filtered list
    if (!uniqueStates.includes(selectedState) && uniqueStates.length > 0) {
      const newState = uniqueStates[0];
      setSelectedState(newState);
      calculateMetrics(data, newState);
    }

    //dependency array
  }, [data, selectedRegion]);

  //show spinner while fetching data
  if (loading) return <Spinner />;

  return (
    <div className="flex flex-col h-auto gap-4 w-100">
      <div className="flex justify-between md:flex-col lg:flex-row lg:h-300px w-100 md:h-auto md:gap-4 lg:gap-0">
        <PriceCardGroup
          currentPrices={currentPrices}
          performance={performance}
        />

        <div className="flex flex-col gap-1 pb-2 border h-100 lg:w-50 md:w-100 dark:bg-deepBlack rounded-xl border-deepBlack">
          <ProductSelector
            selectedProduct={selectedProduct}
            onChange={handleProductChange}
            data={data}
          />

          <ChartCard data={priceHistory} />

          {/* button to show daily summary modal */}
          <button
            className="self-end pr-2 cursor-pointer text-deepGreen text-13px hover:text-sharpGreen"
            onClick={() => {
              setSummary(true);
              //to scroll to top when modal opens
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
          >
            View daily summary
          </button>

          <div className="flex justify-between border-t border-darkBg">
            <PeriodSelector
              selectedPeriod={selectedPeriod}
              onChange={handlePeriodChange}
            />

            <RegionSelector
              regions={regions}
              selectedRegion={selectedRegion}
              onChange={handleRegionChange}
            />

            <StateSelector
              states={states}
              selectedState={selectedState}
              onChange={handleStateChange}
            />

            <div className="flex items-center gap-0.5 text-textGray pr-2 text-13px">
              <div className="rounded-full h-3px w-3px bg-sharpGreen"></div>{" "}
              Price
            </div>
          </div>

          {summary && <SummaryModal />}
        </div>
      </div>

      <WeeklyRecord />
    </div>
  );
}

export default AnalysisContainer;
