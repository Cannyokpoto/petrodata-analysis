'use client'

import { getContext } from "@/Context/Context";
import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";



function ThemeSwitch() {

  //from context
    const { darkTheme, lightTheme } = getContext();

  return (
    <div className="flex items-center w-auto gap-1 border cursor-pointer lg:h-30px md:h-27px bg-deepGreen rounded-3xl border-deepGreen">
        
      <div
        className="flex items-center justify-center text-white rounded-full dark:bg-white lg:w-30px md:w-27px lg:h-30px md:h-27px dark:text-deepGreen"
        onClick={darkTheme}
      >
        <IoMoonOutline className="text-20px" />
      </div>


      <div
        className="flex items-center justify-center bg-white rounded-full text-deepGreen dark:bg-deepGreen lg:w-30px md:w-27px lg:h-30px md:h-27px dark:text-white"
        onClick={lightTheme}
      >
        <IoSunnyOutline className="text-20px" />
      </div>
    </div>
  );
}

export default ThemeSwitch;
