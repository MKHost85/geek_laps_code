import React from "react";

export default function IndustryIcom({ data, handleClickIndustry,idToStyle, setIdToStyle }) {
  return (
    <li
      onClick={(e) => {
        handleClickIndustry(data.name);
        setIdToStyle(data.id)
      }}
      className={`flex flex-row items-center gap-x-[7px] w-fit cursor-pointer ${
        data.id === idToStyle ? "bg-[#53ACFF] text-[#000]" : ""
      } group hover:bg-[#53ACFF] hover:text-[#000] rounded-md px-[4px]`}
    >
      <span className="md:custom__css_icon">{data.icon}</span>
      <span className="md:text-[14px] lg:text-[16px]">{data.name}</span>
    </li>
  );
}
