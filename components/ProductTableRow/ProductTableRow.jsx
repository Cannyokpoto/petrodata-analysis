

import DownloadBtn from "../DownloadBtn/DownloadBtn";
import MiniChart from "../MiniChart/MiniChart";




function ProductTableRow({ product, label, price, change, percent, sparkData, sparkDates }) {
  const positive = percent >= 0;

  

  return (
    <tr className={`${product.includes('LPG') ? '' : 'border-b border-iconBg'}`}>
      
      <td className="pl-2 font-semibold dark:font-bold">
        {product}
        <span className="ml-1 font-normal dark:text-textGray">{label}</span>
      </td>
      
      <td className="dark:text-textGray">₦{price.toFixed(2)}</td>
      
      
      <td className="py-1">
        <span className={`mr-2 ${positive ? 'text-sharpGreen' : 'text-sharpRed'}`}>
          {change.toFixed(2)}
        </span>
        <span className={`rounded-lg px-0.5 text-sm ${positive ? 'bg-successBg text-successText' : 'bg-errorBg text-errorText'}`}>
          {percent.toFixed(2)}%
        </span>
      </td>
      
      <td className="">
        <MiniChart data={sparkData} color={positive ? '#12B76A' : '#F04438'} />
      </td>
      
      <td className="">
        <DownloadBtn 
            data={sparkData}
            dates={sparkDates}
            filename={`${product}_record.csv`}
        />
      </td>
    </tr>
  );
}


export default ProductTableRow;