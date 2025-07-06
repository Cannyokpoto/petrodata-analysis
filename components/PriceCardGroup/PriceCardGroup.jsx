
 
 
 function PriceCardGroup({ currentPrices, performance }) {
  return (
    <div className="flex flex-col gap-3 pt-1 pb-2 border h-100 lg:w-45 md:w-100 dark:bg-deepBlack rounded-xl border-deepBlack">

        <h3 className="pl-2 dark:text-white lg:text-15px md:text-13px">Current product retail prices</h3>
      
      <div className="flex flex-col h-auto w-100">
      {Object.entries(currentPrices).map(([key, value]) => {

        const fullMeaning = () =>{
            if(key.includes('PMS')){
                return 'Premium Motor Spirit'
            }

            if(key.includes('AGO')){
                return 'Automotive Gas Oil'
            }

            if(key.includes('DPK')){
                return 'Dual Purpose Kerosene'
            }

            if(key.includes('ICE')){
                return 'ICE Brent Crude'
            }

            if(key.includes('LPG')){
                return 'Liquified Petroleum Gas'
            }
        }
        
        return (
            <div key={key} className="flex items-center justify-between py-1.5 pl-2 pr-1 border-b w-100 border-darkBg lg:text-15px md:text-13px">
            
          <div className="font-bold dark:text-white dark:font-normal">{key} <span className="font-normal dark:text-textGray">{fullMeaning()}</span></div>
          
          
          <div className="flex items-center justify-between w-40 gap-1">
            <div className="flex justify-end w-40">&#8358;{value}</div>
          
            <div
                className={`text-sm ${
                performance[key].percent >= 0
                    ? 'text-sharpGreen'
                    : 'text-sharpRed'
                } flex gap-1 w-60 justify-end`}
            >
                {performance[key].change} 
                
                <span className={`${
                performance[key].percent >= 0
                    ? 'bg-successBg text-successText'
                    : 'bg-errorBg text-errorText'
                } rounded-lg px-0.5`}>{performance[key].percent}%</span>
            </div>
          </div>
        </div>
        )
      })}
      </div>
      
    </div>
  );
}


export default PriceCardGroup;