/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Content from "./components/Content/Content";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import getData from "./data";
import "./App.css";

export default function App() {
  const [listOfData, _] = useState(getData);
  const [filterList, setFilterList] = useState([]);

  const [stockFilter, setStockFilter] = useState([{}]);

  const [textSearch, setTextSearch] = useState("");

  const [industry, setIndustry] = useState({});
  const [marketCap, setMarketCap] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [strategy, setStrategy] = useState("");
  const [asset, setAsset] = useState("");

  function handleSaveFilter() {
    setStockFilter([
      ...stockFilter,
      { ...industry, marketCap, riskLevel, strategy, asset },
    ]);
    console.log(stockFilter);
  }

  function handleChangeIndustry(name, icon) {
    setIndustry({ name, icon });
  }

  function handleChangeMarketCap(value) {
    setMarketCap(value);
  }

  function handleChangeRiskLevel(value) {
    setRiskLevel(value);
  }

  function handleChangeStrategy(value) {
    setStrategy(value);
  }

  function handleChangeAsset(value) {
    setAsset(value);
  }

  function handleSearchNavbar(value) {
    setTextSearch(value);
  }
  useEffect(() => {
    if (textSearch.trim() !== null) {
      setFilterList(
        listOfData.filter((item) =>
          item.name.toLowerCase().includes(textSearch.toLowerCase())
        )
      );
    } else {
      setFilterList(listOfData);
    }
  }, [textSearch]);

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
    <div className="container mx-auto h-[750px] md:h-[890px] xl:h-screen pb-[20px] pt-[20px]  bg-[#202020] text-[#fff] relative overflow-hidden max-md:max-w-[700px] custom-clear-scrollbar">
      <div className="xl:flex flex-row pl-[46px] h-full">
        <div className="flex flex-col gap-[23px] h-full xl:w-[615px] 2xl:w-[900px] xl:flex-none">
          <Search
            setStateMenuFilter={setStateMenuFilter}
            handleSearchNavbar={handleSearchNavbar}
          />
          <Content listOfData={filterList} />
        </div>
        <Filter
          setStateMenuFilter={setStateMenuFilter}
          openWindowFilter={openWindowFilter}
          handleChangeIndustry={handleChangeIndustry}
          handleChangeMarketCap={handleChangeMarketCap}
          handleChangeRiskLevel={handleChangeRiskLevel}
          handleChangeStrategy={handleChangeStrategy}
          handleChangeAsset={handleChangeAsset}
          handleSaveFilter={handleSaveFilter}
          stockFilter={stockFilter}
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-[47px] md:w-[70px] bg-[#181818] pt-[21px]  ">
        <Navbar />
      </div>
    </div>
  );
}
