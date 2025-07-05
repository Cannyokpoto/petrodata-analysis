'use client'

import { getContext } from "@/Context/Context";
import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";



function ThemeSwitch() {

    const { toggleTheme, darkTheme, lightTheme } = getContext();

  return (
    <div className="flex items-center w-auto gap-1 border cursor-pointer h-30px bg-deepGreen rounded-3xl border-deepGreen">
        
      <div
        className="flex items-center justify-center text-white rounded-full dark:bg-white w-30px h-30px dark:text-deepGreen"
        onClick={darkTheme}
      >
        <IoMoonOutline className="text-20px" />
      </div>


      <div
        className="flex items-center justify-center bg-white rounded-full text-deepGreen dark:bg-deepGreen w-30px h-30px dark:text-white"
        onClick={lightTheme}
      >
        <IoSunnyOutline className="text-20px" />
      </div>
    </div>
  );
}

export default ThemeSwitch;
