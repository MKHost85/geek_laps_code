/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Content from "./components/Content/Content";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { GlobalContext } from "./Context/Store"

export default function App() {
  const {state } = useContext(GlobalContext);

  // open Filter Menu
  const [openWindowFilter, setOpenWindowFilter] = useState(false);
  function setStateMenuFilter() {
    if (openWindowFilter === true) {
      setOpenWindowFilter(false);
    } else {
      setOpenWindowFilter(true);
    }
  }

  return (
    <div className="max-xl:container px-[50px] mx-auto h-[750px] md:h-[890px] xl:h-screen pb-[20px] pt-[20px]  bg-[#202020] text-[#fff] relative overflow-hidden max-md:max-w-[700px] custom-clear-scrollbar">
      <div className="xl:flex flex-row pl-[46px] h-full">
        <div className="flex flex-col gap-[23px] h-full  xl:w-full">
          <Search
            setStateMenuFilter={setStateMenuFilter}
          />
          <Content />
        </div>
        <Filter
          setStateMenuFilter={setStateMenuFilter}
          openWindowFilter={openWindowFilter}
          
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-[47px] md:w-[70px] bg-[#181818] pt-[21px] group hover:w-[180px] transition-all ease-linear">
        <Navbar />
      </div>
    </div>
  );
}
