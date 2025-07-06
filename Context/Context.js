'use client';
import { useEffect, useState, createContext, useContext } from 'react';
import { saveAs } from "file-saver";
import { unparse } from "papaparse";



const PetroContext = createContext();



export function PetroContextProvider({ children }) {

  // state to manage dark & light theme
  const [theme, setTheme] = useState('dark');


  useEffect(() => {

    //to retrieve the current theme from local storage
  const saved = localStorage.getItem('theme');

  //setting the default theme to dark, according to the figma design
  const systemDefault = 'dark';

  const appliedTheme = saved || systemDefault;
  setTheme(appliedTheme);

    document.documentElement.classList.toggle('dark', appliedTheme === 'dark');
  }, []);


  //switch to dark theme
  const darkTheme = () => {
    const newTheme = 'dark';
    setTheme(newTheme);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', newTheme);
  };


  //switch to light theme
  const lightTheme = () => {
    const newTheme = 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', newTheme);
  };


  //state to manage what displays on the page according to the side menu button clicked
  const [view, setView] = useState('Analysis')

  //state to toggle the side menu
  const [openMenu, setOpenMenu] = useState(true);

  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  }


  //to display the current date on the header
  function getTodayDate() {
  const today = new Date();

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  return today.toLocaleDateString('en-US', options);
}


//state to switch options on the analysis bar (Retail price analysis, Flights analysis, Depots analysis etc)
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

//loading state to ensure the mock data is fetched before the chart is rendered.
const [loading, setLoading] = useState(true);


//state to manage daily summary modal
const [summary, setSummary] = useState(false);


  //context values
  const contextValue = {
    theme, view, setView, toggleMenu, openMenu, getTodayDate, darkTheme, lightTheme, analysis, setAnalysis, sharePetroData, summary, setSummary, loading, setLoading }


  return (
    <PetroContext.Provider value={contextValue}>
      {children}
    </PetroContext.Provider>
  );
}



export const getContext = () => useContext(PetroContext);
