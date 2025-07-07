import { FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";
import Papa from "papaparse";



function DownloadBtn({ data, dates, filename = "product.csv" }) {
  
  //to handle data download
    const handleDownload = () => {
    if (!data || data.length === 0 || !dates || dates.length !== data.length) return;

    const rows = data.map((price, index) => ({
      Date: dates[index],
      Price: price,
    }));

    const csv = Papa.unparse(rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, filename);
  };


  
  return (
    <button onClick={handleDownload} className="text-gray-600 dark:text-textGray hover:text-black dark:hover:text-white">
      <FiDownload className="text-18px" />
    </button>
  );
}


export default DownloadBtn