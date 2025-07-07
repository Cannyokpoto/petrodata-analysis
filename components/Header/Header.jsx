"use client";

import { getContext } from "@/Context/Context";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";


function Header() {

  //from context
  const { view, getTodayDate } = getContext();

  return (
    <div className="flex flex-row items-center justify-between h-auto w-100">
        
      <div className="flex flex-col w-auto">
        <h3 className="font-bold dark:font-normal dark:text-lightGray lg:text-20px">{view}</h3>
        <span className="dark:text-textGray lg:text-13px md:text-11px">{getTodayDate()}</span>
      </div>


      <div className="flex items-center justify-end w-auto gap-1 text-textWhite">
        
        <div className="flex items-center justify-center border border-borderColor rounded-full lg:h-30px lg:w-30px p-0.5 bg-iconBg cursor-pointer md:h-27px md:w-27px"><CiSearch className="text-25px" /></div>


        <div className="flex items-center border lg:h-30px md:h-27px border-borderColor bg-iconBg py-0.5 px-1 gap-0.5 rounded-2xl cursor-pointer md:text-11px lg:text-13px"><IoAlarmOutline className="text-20px" /> Set alert</div>

        <div className="flex items-center justify-center border border-borderColor rounded-full lg:h-30px lg:w-30px p-0.5 bg-iconBg cursor-pointer md:h-27px md:w-27px"><GoBell className="text-20px" /></div>

        
        <ThemeSwitch />

      </div>
    </div>
  );
}

export default Header;
