'use client'

import { getContext } from '@/Context/Context';
import React from 'react'
import Header from '../Header/Header';
import Analysis from '../Analysis/Analysis';
import Dashboard from '../DashBoard/DashBoard';

function AdminArea() {
  
  //from context
  const { openMenu, view } = getContext();
  

  return (
    <div className={`flex-1 h-auto py-3 dark:bg-darkBg dark:text-textWhite ${openMenu ? 'lg:px-3 md:px-2' : 'lg:px-5 md:px-2'} bg-white flex flex-col gap-4 h-auto`}>
      <Header />
      {view === 'Analysis' && <Analysis />}

      {view === 'Dashboard' && <Dashboard />}
    </div>
  )
}

export default AdminArea
