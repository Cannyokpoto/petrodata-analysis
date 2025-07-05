"use client";

import { getContext } from "@/Context/Context";
import images from "@/utils/images";
import Image from "next/image";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import { LuChevronsLeft } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import { IoIosBook } from "react-icons/io";
import { LuSparkle } from "react-icons/lu";
import { CiBookmarkMinus } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";




function SideBar() {
  const { view, setView, toggleMenu, openMenu } = getContext();

  
  return (
    <div className={`relative flex flex-col ${openMenu ? 'w-20 pl-2' : 'w-50px'} gap-12 pt-2 h-auto dark:bg-deepBlack dark:text-textWhite border-r border-borderColor`}>
      
      <div className={`flex items-center ${openMenu ? '' : 'justify-center'} gap-2 w-100`}>
        <Image src={images.flame} alt="logo" className="w-auto h-40px" />
        
        {openMenu && <Image src={images.logo} alt="logo" className="w-auto h-20px" />}
      </div>


    <div className="flex items-center justify-center dark:border dark:border-gray-700 p-0.5 cursor-pointer rounded-full bg-darkBg w-30px h-30px absolute top-9 -right-1.5 hover:bg-deepGreen hover:text-white text-white" onClick={toggleMenu}>
        {openMenu ? <LuChevronsLeft className="text-25px" /> : <FiChevronsRight className="text-25px" />}
    </div>



      <div className="flex flex-col items-center h-auto gap-1 w-100">
        
        <div
          className={`flex items-center gap-1 py-0.5 w-100 cursor-pointer hover:text-deepGreen  ${view === 'Dashboard' ? "border-r-2 border-deepGreen text-deepGreen" : ""} ${openMenu ? '' : 'justify-center'}`}
          onClick={() => {
            setView("Dashboard");
          }}
        >
          <MdOutlineDashboard className="text-20px" /> {openMenu ? 'Dashboard' : ''}
        </div>


        <div
          className={`flex items-center gap-1 py-0.5 w-100 cursor-pointer hover:text-deepGreen  ${view === 'Analysis' ? "border-r-2 border-deepGreen text-deepGreen" : ""} ${openMenu ? '' : 'justify-center'}`}
          onClick={() => {
            setView("Analysis");
          }}
        >
          <FiBarChart2 className="text-20px" /> {openMenu ? 'Analysis' : ''}
        </div>


        <div
          className={`flex items-center gap-1 py-0.5 w-100 cursor-pointer hover:text-deepGreen  ${view === 'News & Report' ? "border-r-2 border-deepGreen text-deepGreen" : ""} ${openMenu ? '' : 'justify-center'}`}
          onClick={() => {
            setView("News & Report");
          }}
        >
          <IoIosBook className="text-20px" /> {openMenu ? 'News & Report' : ''}
        </div>


         <div
          className={`flex items-center gap-1 py-0.5 w-100 cursor-pointer hover:text-deepGreen  ${view === 'Exclusive Report' ? "border-r-2 border-deepGreen text-deepGreen" : ""} ${openMenu ? '' : 'justify-center'}`}
          onClick={() => {
            setView("Exclusive Report");
          }}
        >
          <LuSparkle className="text-20px" /> {openMenu ? 'Exclusive Report' : ''}
        </div>


        <div
          className={`flex items-center gap-1 py-0.5 w-100 cursor-pointer hover:text-deepGreen  ${view === 'Watchlist' ? "border-r-2 border-deepGreen text-deepGreen" : ""} ${openMenu ? '' : 'justify-center'}`}
          onClick={() => {
            setView("Watchlist");
          }}
        >
          <CiBookmarkMinus className="text-20px" />  {openMenu ? 'Watchlist' : ''}
        </div>

        <div
          className={`flex items-center gap-1 py-0.5 w-100 cursor-pointer hover:text-deepGreen  ${view === 'Settings' ? "border-r-2 border-deepGreen text-deepGreen" : ""} ${openMenu ? '' : 'justify-center'}`}
          onClick={() => {
            setView("Settings");
          }}
        >
          <CiSettings className="text-20px" /> {openMenu ? 'Settings' : ''}
        </div>

        
      </div>
    </div>
  );
}

export default SideBar;
