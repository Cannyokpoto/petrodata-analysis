'use client'

import React from 'react';
import { LuDroplet } from "react-icons/lu";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { LuWarehouse } from "react-icons/lu";
import { LuLightbulb } from "react-icons/lu";
import { LuShip } from "react-icons/lu";
import { BsDatabase } from "react-icons/bs";
import { getContext } from '@/Context/Context';



function AnalysisBar() {

    const {analysis, setAnalysis} = getContext();

  return (
    <div className='flex items-center gap-2 border-t border-iconBg w-100'>
        
      <div className={`relative bottom-0.2 flex items-center gap-0.5 cursor-pointer ${analysis==='retail' ? 'border-t-2 border-deepGreen text-deepGreen' : ''}`}
      onClick={()=>setAnalysis('retail')}
      ><LuDroplet className='text-15px' /> Retail price analysis</div>

      <div className={`relative bottom-0.2 flex items-center gap-0.5 cursor-pointer ${analysis==='flights' ? 'border-t-2 border-deepGreen text-deepGreen' : ''}`}
      onClick={()=>setAnalysis('flights')}
      ><PiAirplaneTakeoff className='text-15px' /> Flights analysis</div>

       <div className={`relative bottom-0.2 flex items-center gap-0.5 cursor-pointer ${analysis==='depots' ? 'border-t-2 border-deepGreen text-deepGreen' : ''}`}
      onClick={()=>setAnalysis('depots')}
      ><LuWarehouse className='text-15px' /> Depots analysis</div>

      <div className={`relative bottom-0.2 flex items-center gap-0.5 cursor-pointer ${analysis==='power' ? 'border-t-2 border-deepGreen text-deepGreen' : ''}`}
      onClick={()=>setAnalysis('power')}
      ><LuLightbulb className='text-15px' /> Power analysis</div>

      <div className={`relative bottom-0.2 flex items-center gap-0.5 cursor-pointer ${analysis==='cargo' ? 'border-t-2 border-deepGreen text-deepGreen' : ''}`}
      onClick={()=>setAnalysis('cargo')}
      ><LuShip className='text-15px' /> Cargo analysis</div>

      <div className={`relative bottom-0.2 flex items-center gap-0.5 cursor-pointer ${analysis==='raw' ? 'border-t-2 border-deepGreen text-deepGreen' : ''}`}
      onClick={()=>setAnalysis('raw')}
      ><BsDatabase className='text-15px' /> Raw data</div>
      
    </div>
  )
}

export default AnalysisBar
