"use client";

import { getContext } from "@/Context/Context";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";


function Header() {
  const { view, getTodayDate } = getContext();

  return (
    <div className="flex flex-row items-center justify-between h-auto w-100">
        
      <div className="flex flex-col w-auto">
        <h3 className="font-bold dark:font-normal dark:text-lightGray text-20px">{view}</h3>
        <span className="dark:text-textGray text-13px">{getTodayDate()}</span>
      </div>

      <div className="flex items-center justify-end w-auto gap-1 text-textWhite">
        
        <div className="flex items-center justify-center border border-borderColor rounded-full h-30px w-30px p-0.5 bg-iconBg cursor-pointer"><CiSearch className="text-25px" /></div>


        <div className="flex items-center border h-30px border-borderColor bg-iconBg py-0.5 px-1 gap-0.5 rounded-2xl cursor-pointer"><IoAlarmOutline className="text-20px" /> Set alert</div>

        <div className="flex items-center justify-center border border-borderColor rounded-full h-30px w-30px p-0.5 bg-iconBg cursor-pointer"><GoBell className="text-20px" /></div>

        
        <ThemeSwitch />

      </div>
    </div>
  );
}

export default Header;
