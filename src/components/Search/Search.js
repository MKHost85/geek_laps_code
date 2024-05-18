import React, { useState } from "react";

export default function Search({ setStateMenuFilter, handleSearchNavbar }) {
  const [openInputSearch, setOpenInputSearch] = useState(false);

  function handleOpenInputSearch() {
    if (openInputSearch === true) {
      setOpenInputSearch(false);
    } else {
      setOpenInputSearch(true);
    }
  }

  return (
    <div className="flex flex-row justify-between items-center gap-x-[12px]">
      <h2 className="text-[24px] md:text-[32px] lg:text-[36px] relative font-bold pl-[9px]  after:content-[''] after:absolute after:left-[0] after:top-[7px] after:border-l-[3px] after:border-[#53ACFF] after:h-[60%]">
        ALERTS
      </h2>
      <div className="flex flex-row justify-end w-full items-center  px-[10px]  rounded-md">
        <div
          className={`xl:${
            openInputSearch ? "w-full" : "w-0" 
          } xl:w-full xl:bg-[#313131] xl:px-[10px] xl:py-[7px] xl:rounded-md xl:flex items-center transition-all ease-linear`}
        >
          <input
            onChange={(e) => handleSearchNavbar(e.target.value)}
            type="text"
            placeholder="Search By Name"
            className="w-full outline-none bg-transparent text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
          />
           <svg
          onClick={handleOpenInputSearch}
          className="text-[#F5F5F5] pl-[3px] cursor-pointer flex-none size-[19px] md:size-[26px]"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.74961 13.7463C12.6602 12.4158 14.017 8.79927 12.78 5.66857C11.543 2.53787 8.18072 1.07854 5.27012 2.40905C2.35951 3.73957 1.00277 7.35609 2.23975 10.4868C3.47672 13.6175 6.839 15.0768 9.74961 13.7463Z"
              stroke="#F5F5F5"
              strokeWidth="2.48539"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5584 12.4324L15.9996 17.2101"
              stroke="#F5F5F5"
              strokeWidth="2.48539"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        </div>

        <svg
          onClick={handleOpenInputSearch}
          className="text-[#F5F5F5] pl-[3px] cursor-pointer flex-none size-[19px] md:size-[26px] xl:hidden"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.74961 13.7463C12.6602 12.4158 14.017 8.79927 12.78 5.66857C11.543 2.53787 8.18072 1.07854 5.27012 2.40905C2.35951 3.73957 1.00277 7.35609 2.23975 10.4868C3.47672 13.6175 6.839 15.0768 9.74961 13.7463Z"
              stroke="#F5F5F5"
              strokeWidth="2.48539"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5584 12.4324L15.9996 17.2101"
              stroke="#F5F5F5"
              strokeWidth="2.48539"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
      <div className=" hidden xl:flex flex-col justify-center items-center gap-y-[19px]">
        <buttom className="relative cursor-pointer">
          <i>
            <svg
              className="size-[32px]"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2913 13.1341L17.8688 11.7116C17.542 11.3599 17.3527 10.9023 17.3354 10.4225V7.62197C17.3354 4.02129 14.9349 0.954041 10.6674 0.954041C6.39996 0.954041 3.99951 3.93238 3.99951 7.62197V10.7337C3.99128 11.0151 3.88064 11.2838 3.68834 11.4894L2.04359 13.1341C1.87608 13.2983 1.78021 13.5219 1.77687 13.7565V16.9571C1.77687 17.1929 1.87054 17.419 2.03727 17.5857C2.204 17.7524 2.43013 17.8461 2.66593 17.8461H7.60019C7.72388 18.57 8.09963 19.2269 8.66097 19.7004C9.2223 20.174 9.93303 20.4337 10.6674 20.4337C11.4018 20.4337 12.1126 20.174 12.6739 19.7004C13.2352 19.2269 13.611 18.57 13.7347 17.8461H18.6689C18.9047 17.8461 19.1309 17.7524 19.2976 17.5857C19.4643 17.419 19.558 17.1929 19.558 16.9571V13.7565C19.5547 13.5219 19.4588 13.2983 19.2913 13.1341Z"
                fill="#53ACFF"
              />
            </svg>
          </i>
          <span className="absolute top-[-5px] right-0 bg-[#118F4B] rounded-full size-[16px] text-center leading-tight text-[14px]">
            6
          </span>
        </buttom>
        
      </div>
      <button
        onClick={setStateMenuFilter}
        className="bg-[#53ACFF] rounded-md text-[11px] py-[3px] px-[22px] md:px-[28px] md:text-[16px] xl:hidden"
      >
        Filter
      </button>
    </div>
  );
}
