import React, { useState } from "react";

export default function IndustryIcom({ data, handleClickIndustry, toChiled }) {
  const [activeLink, setActiveLink] = useState(false);

  toChiled(handleunActiveLink);
  function handleActiveLink(state) {
    if (activeLink === false) {
      setActiveLink(true);
    }
    else {
      setActiveLink(false);

    }
  }

  function handleunActiveLink() {
    setActiveLink(false);
    toChiled();
  }
  return (
    <li
    
      onClick={(e) => {
        handleClickIndustry(data.name, data.icon);
        handleActiveLink(true);
      }}
      className={`flex flex-row items-center gap-x-[7px] w-fit cursor-pointer ${
        activeLink ? "bg-[#53ACFF] text-[#000]" : ""
      } group hover:bg-[#53ACFF] hover:text-[#000] rounded-md px-[4px]`}
    >
      <span className="md:custom__css_icon">{data.icon}</span>
      <span className="md:text-[14px] lg:text-[16px]">{data.name}</span>
    </li>
  );
}
