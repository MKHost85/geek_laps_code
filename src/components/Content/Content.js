import React from "react";
import { useContext } from "react";
import Slice from "../Slice/Slice";
import { GlobalContext } from "../../Context/Store";

export default function Content() {
  const { state } = useContext(GlobalContext);
  return (
    <div className="flex flex-col gap-y-[5px] xsm:gap-y-[10px] md:gap-y-[15px] overflow-y-auto pb-[30px] custom-clear-scrollbar">
      {state.filterSearch.length > 0
        ? state.filterSearch.map((item) => (
            <div key={item.id} className="">
              <Slice data={item} />
            </div>
          ))
        : state.data.map((item) => (
            <div key={item.id} className="">
              <Slice data={item} />
            </div>
          ))}
    </div>
  );
}
