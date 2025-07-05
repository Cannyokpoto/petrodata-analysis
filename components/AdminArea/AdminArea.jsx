'use client'

import { getContext } from '@/Context/Context';
import React from 'react'
import Header from '../Header/Header';
import Analysis from '../Analysis/Analysis';

function AdminArea() {
  
  const { openMenu, view } = getContext();
  

  return (
    <div className={`flex-1 h-auto py-3 dark:bg-darkBg dark:text-textWhite ${openMenu ? 'px-3' : 'px-5'} bg-white flex flex-col gap-4 h-auto md:border md:border-red-500`}>
      <Header />
      {view === 'Analysis' && <Analysis />}
    </div>
  )
}

export default AdminArea
