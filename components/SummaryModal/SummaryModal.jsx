import { getContext } from '@/Context/Context';
import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import SummaryItem from '../SummaryItem/SummaryItem';


function SummaryModal() {

    const {setSummary} = getContext();
    
  return (
    <div className='absolute top-0 left-0 z-10 flex items-center justify-center cursor-pointer min-h-100vh w-100vw bg-overlay text-13px'
        onClick={()=>setSummary(false)}
    >
        
      <div className='flex flex-col gap-3 px-2 pt-2 bg-white border border-darkBg rounded-xl h-70vh lg:w-50vw dark:bg-modalBg md:w-80vw'>
        
        <div className='flex flex-col'>
            <IoCloseOutline className='self-end cursor-pointer text-25px' onClick={()=>setSummary(false)} />
            <h4 className='font-bold dark:text-white dark:font-normal'>Daily summary</h4>
            <p className='dark:text-textGray'>Here's a quick summary of the PMS (Premium Motor Spirit - Petrol) market in Nigeria, breaking down demand, supply, and regional trends:</p>
        </div>

        <div className='flex flex-col gap-2 pl-2 overflow-y-auto h-80'>
            {
                 Array(5).fill().map((_, i) =>
                    <SummaryItem key={i} />
                )
            }
        </div>
        
      </div>
    </div>
  )
}

export default SummaryModal
