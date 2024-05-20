import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/Store";

export default function SavedFilter({  listIcons }) {
  const {state, dispatch } = useContext(GlobalContext);

  function handleDeleteFromFilterList(id) {
    console.log("test " + id);
    dispatch({
      type:"DELETE_FILTER",
      id:id
    })
  }

  return (
    <ul className="flex flex-row flex-wrap gap-[10px] p-[10px]">
      {state.listOfFilter
        ? state.listOfFilter.map((filter) => (
            <li
              key={filter.id}
              className="flex flex-row items-center gap-x-[3px] w-fit h-[15px] cursor-pointer group bg-[#53ACFF] text-[#000] rounded-[4px] px-[4px] "
            >
              {listIcons.map((icon) => ( icon.name === filter.industry ? icon.icon : ""
              ))}
              <span>{filter.industry}</span>
              <button className="p-1" onClick={(e) => handleDeleteFromFilterList(filter.id)}>X</button>
            </li>
          ))
        : ""}
    </ul>
  );
}
