// import React, { useState } from "react";
import Slice from "../Slice/Slice";
// import data from "../../data";

export default function Content({ listOfData }) {
  return (
    <div className="flex flex-col gap-y-[16px] overflow-y-auto pb-[30px] custom-clear-scrollbar">
      {listOfData.map((item) => (
        <div key={item.id} className="">
          <Slice data={item}/>
        </div>
      ))}
    </div>
  );
}
