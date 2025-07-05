import Link from 'next/link';
import React from 'react';
import { LuSquareArrowOutUpRight } from "react-icons/lu";


function SummaryItem() {
  return (
    <Link href='/' className='flex flex-col h-auto gap-1'>
      <div className='flex justify-between pr-2'>
        <h5 className='text-white'>Petrochem daily wire</h5>

        <div className='flex items-center gap-2 text-textGray'>August 9, 2024 <LuSquareArrowOutUpRight className='text-15px' /></div>
      </div>

      <div className='text-textGray'>Nigeria consumes approximately 40-50 million liters of PMS per day. Demand is driven by: Transportation (70-80%): cars, buses, trucks, motorcycles</div>
    </Link>
  )
}

export default SummaryItem
