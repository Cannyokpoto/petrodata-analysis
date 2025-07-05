'use client';
import { useEffect, useState, createContext, useContext } from 'react';
import { saveAs } from "file-saver";
import { unparse } from "papaparse";



const PetroContext = createContext();

export function PetroContextProvider({ children }) {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    }
  }, []);


  const darkTheme = () => {
    const newTheme = 'dark';
    setTheme(newTheme);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', newTheme);
  };

  const lightTheme = () => {
    const newTheme = 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', newTheme);
  };


  const [view, setView] = useState('Analysis')

  const [openMenu, setOpenMenu] = useState(false);


  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  }


  function getTodayDate() {
  const today = new Date();

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  return today.toLocaleDateString('en-US', options);
}

const [analysis, setAnalysis] = useState('retail');


//to share analysis data
const sharePetroData = (records) => {

// Prepare the data
const csvData = records.map(record => ({
State: record.State,
Period: record.Period,
AGO: record.AGO,
PMS: record.PMS,
DPK: record.DPK,
LPG: record.LPG,
Region: record.Region,
}));

// Convert to CSV file
const csv = unparse(csvData);

// Create a Blob and trigger download
const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
saveAs(blob, "Retail_price_data.csv");

};

const [loading, setLoading] = useState(true);


  const [summary, setSummary] = useState(false);


  const contextValue = {
    theme, view, setView, toggleMenu, openMenu, getTodayDate, darkTheme, lightTheme, analysis, setAnalysis, sharePetroData, summary, setSummary, loading, setLoading }


  return (
    <PetroContext.Provider value={contextValue}>
      {children}
    </PetroContext.Provider>
  );
}



export const getContext = () => useContext(PetroContext);
