'use client'


import { getContext } from '@/Context/Context'
import AnalysisBar from '../AnalysisBar/AnalysisBar'
import AnalysisContainer from '../AnalysisContainer/AnalysisContainer'

function Analysis() {

  //from context
  const {analysis} = getContext();

  return (
    <div className='flex flex-col h-auto gap-3 w-100'>
      <AnalysisBar />

    {analysis ==='retail' && <AnalysisContainer />}
    </div>
  )
}

export default Analysis
