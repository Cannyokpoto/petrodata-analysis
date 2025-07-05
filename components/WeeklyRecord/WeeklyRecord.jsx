"use client";

import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";


function WeeklyRecord() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/data/petro_data.json")
      .then((res) => res.json())
      .then((json) => {
        const rawData = json.PetroData;

        const filtered = rawData.filter((d) => d.State === "Abuja");
        const recent = filtered.slice(-7).reverse();

        const products = [
          { key: "PMS", label: "Premium Motor Spirit" },
          { key: "AGO", label: "Automotive Gas Oil" },
          { key: "DPK", label: "Dual Purpose Kerosene" },
          { key: "LPG", label: "Liquefied Petroleum Gas" },
        ];

        const result = products.map(({ key, label }) => {
          const latest = recent[0][key];
          const previous = recent[1][key];
          const change = latest - previous;
          const percent = (change / previous) * 100;
          const sparkData = recent.map((d) => d[key]).reverse();
          const sparkDates = recent.map((d) => d.Period).reverse();

          return { product: key, label, price: latest, change, percent, sparkData, sparkDates };
        });

        setAllData(result);
        setFilteredData(result);
      });
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = allData.filter(
      (item) =>
        item.product.toLowerCase().includes(query) ||
        item.label.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  }, [searchQuery, allData]);

  
  return (
    <div className="flex flex-col h-auto gap-3 py-4 text-white border-t border-iconBg">
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <ProductTable data={filteredData} />
    </div>
  );
}


export default WeeklyRecord;