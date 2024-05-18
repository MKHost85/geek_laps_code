/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export default function Slice({ data }) {
  const [opneDescriptions, setOpenDescriptions] = useState(false);
  function openAndCloseDescription() {
    if (opneDescriptions === true) {
      setOpenDescriptions(false);
    } else {
      setOpenDescriptions(true);
    }
  }

  return (
    <>
      <div className=" bg-[#181818] rounded-sm">
        <ul
          onClick={() => {
            openAndCloseDescription();
          }}
          className="grid grid-cols-4 justify-between text-[10px] md:text-[14px] lg:text-[16px] bg-[#313131] py-[11px] pl-[8px] pr-[11px] rounded-sm divide-x divide-[#414040] cursor-pointer"
        >
          <li className="flex flex-row items-center gap-x-[10px] ">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9502 0.107325C11.8519 -0.00315645 11.3616 0.017883 10.9202 0.0173066L9.0392 0.0141362C8.59787 0.0135598 8.01597 -0.0288553 7.75123 0.0360884C7.60058 0.0730275 7.443 0.145128 7.31999 0.281549L0.949635 7.21621C0.949635 7.21621 0.246977 7.92607 0.974324 8.73109L3.95232 12.0349C3.95232 12.0349 4.59659 12.7482 5.26061 12.0124L11.5829 5.00212C11.5829 5.00212 12.0641 4.35772 12.0641 3.85124L12.0649 1.24028C12.0649 0.750517 12.0485 0.217758 11.9502 0.107325ZM7.84431 6.5684L7.20607 6.0244C7.34649 5.7911 7.37824 5.56144 7.29655 5.33274L6.42341 6.29873C6.68416 6.80209 6.80263 7.20842 6.7782 7.52315C6.75399 7.83697 6.62006 8.12888 6.38035 8.39456C6.11024 8.69454 5.80227 8.85402 5.45635 8.87914C5.10849 8.90248 4.76916 8.77644 4.43897 8.50101L4.02163 8.9645L3.69767 8.60539L4.1028 8.15602C3.87691 7.8361 3.76559 7.49836 3.76559 7.14127C3.76559 6.78648 3.889 6.41988 4.13827 6.04607L4.78137 6.62211C4.68578 6.78048 4.62882 6.94485 4.60777 7.11216C4.58672 7.27971 4.59737 7.43059 4.63874 7.56153L5.57326 6.52575C5.36388 6.11067 5.27764 5.73485 5.31042 5.39562C5.34174 5.05755 5.47922 4.75526 5.72058 4.48876C5.96431 4.21876 6.24443 4.07801 6.56431 4.06476C6.88398 4.0515 7.18337 4.17264 7.46557 4.42762L7.68643 4.18273L8.00974 4.54127L7.78887 4.78615C7.99592 5.07979 8.10386 5.37689 8.11114 5.67946C8.11716 5.9817 8.02849 6.27937 7.84431 6.5684ZM10.9186 2.40245C10.6401 2.71165 10.1894 2.71165 9.91157 2.40245C9.63375 2.09498 9.63375 1.5945 9.91157 1.28616C10.1894 0.976955 10.6401 0.976955 10.9186 1.28616C11.197 1.5945 11.197 2.09498 10.9186 2.40245Z"
                fill="white"
              />
            </svg>
            <span>{data.name}</span>
          </li>
          <li className="flex flex-row items-center gap-x-[10px] pl-[11px]">
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1.06221C0 0.47557 0.437718 0 0.977674 0H6.32692L8.47317 2.33184V9.55993C8.47317 10.1466 8.03543 10.6221 7.4955 10.6221H0.977674C0.437718 10.6221 0 10.1466 0 9.55993V1.06221ZM3.91069 2.83257H1.95535V3.54072H3.91069V2.83257ZM6.51782 4.957H1.95535V5.66515H6.51782V4.957ZM3.45751 7.72428C3.19429 7.80112 2.98872 8.01951 2.91628 8.2556L2.29794 8.03169C2.44277 7.55964 2.82381 7.17604 3.28841 7.04042C3.74929 6.9059 4.27477 7.01858 4.72974 7.47332C4.86641 7.42963 5.00182 7.40505 5.13571 7.39726C5.48682 7.3768 5.80235 7.47303 6.07285 7.59547C6.27152 7.68541 6.46412 7.79914 6.62609 7.89473C6.67777 7.92526 6.72646 7.95401 6.77111 7.9795C6.98183 8.09967 7.09778 8.14365 7.16961 8.14365V8.85179C6.91548 8.85179 6.6648 8.71866 6.46816 8.60649C6.40748 8.57186 6.34875 8.53723 6.29081 8.50303C6.13614 8.41175 5.98701 8.3238 5.82216 8.24916C5.60381 8.1503 5.38978 8.0916 5.17058 8.10442C5.13871 8.10626 5.10618 8.10966 5.07298 8.11483L5.07375 8.12424C5.09117 8.35425 5.00379 8.54339 4.89126 8.67922C4.68362 8.9299 4.34534 9.0614 4.09119 9.11161C3.95879 9.13774 3.81638 9.14871 3.691 9.12882C3.62962 9.11904 3.55048 9.09858 3.47592 9.05035C3.39665 8.99908 3.30269 8.90101 3.27861 8.74401C3.25621 8.59799 3.30679 8.47761 3.351 8.40361C3.3966 8.32727 3.45799 8.26127 3.52143 8.20426C3.64489 8.09316 3.82475 7.97305 4.06507 7.84099L4.08259 7.82718C3.85559 7.68307 3.63758 7.67174 3.45751 7.72428Z"
                fill="white"
              />
            </svg>
            <span>{data.marketCap}</span>
          </li>
          <li className="flex flex-row items-center gap-x-[10px] pl-[11px]">
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.305556 4.7178L0.908063 4.87836L1.3616 4.11307L0.499614 3.8841C0.396738 3.85644 0.287853 3.87384 0.196912 3.93246C0.105972 3.99108 0.0404247 4.08612 0.0146911 4.19667C-0.0110426 4.30723 0.00514508 4.42424 0.0596929 4.52197C0.114241 4.6197 0.20268 4.69014 0.305556 4.7178ZM8.16997 4.84178L6.19712 6.74955L3.87772 4.8204C3.83346 4.78383 3.78256 4.75761 3.7283 4.74345L3.41976 4.66079L2.96578 5.42608L3.45203 5.55577L5.97035 7.64975C6.04512 7.7116 6.13765 7.7434 6.23194 7.73967C6.32622 7.73594 6.41633 7.69691 6.48666 7.62932L8.70926 5.47881C8.74839 5.44112 8.78019 5.39547 8.80282 5.3445C8.82544 5.29352 8.83844 5.23824 8.84107 5.18184C8.8437 5.12543 8.83591 5.06903 8.81814 5.01588C8.80037 4.96273 8.77298 4.91389 8.73755 4.87218C8.66585 4.7876 8.56593 4.73693 8.45959 4.73123C8.35325 4.72554 8.24914 4.76528 8.16997 4.84178ZM3.83926 2.7459L5.99953 4.2323C6.08727 4.29259 6.19331 4.31409 6.29546 4.29231C6.39761 4.27053 6.48798 4.20716 6.54766 4.11544L8.76982 0.67519C8.7999 0.628764 8.82114 0.576395 8.83229 0.521105C8.84345 0.465815 8.8443 0.408698 8.83481 0.353051C8.82531 0.297404 8.80566 0.244328 8.77698 0.196886C8.7483 0.149444 8.71116 0.108575 8.66771 0.0766377C8.58004 0.0115444 8.47192 -0.0135097 8.36709 0.00697465C8.26225 0.027459 8.16926 0.0918079 8.10852 0.185897L6.10695 3.28364L3.93386 1.78869C3.84367 1.72673 3.73431 1.70572 3.62973 1.73026C3.52554 1.75527 3.43479 1.82359 3.37732 1.92027L0.0633159 7.51009C0.0244549 7.57511 0.00265791 7.6502 0.000228026 7.72743C-0.00220185 7.80465 0.0148256 7.88115 0.0495113 7.94884C0.084197 8.01653 0.135253 8.07289 0.197284 8.11198C0.259315 8.15106 0.330018 8.17141 0.401922 8.17087C0.46957 8.17106 0.536164 8.15286 0.595516 8.11798C0.654869 8.0831 0.705055 8.03266 0.741412 7.97136L3.83926 2.7459Z"
                fill="white"
              />
            </svg>
            <span className={`${data.rate < 0 ? "text-red-500" : "text-green-500"} `}>{data.rate} %</span>
          </li>
          <li className="flex flex-row items-center gap-x-[10px] pl-[11px]">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7928 0H0.258878C0.115807 0 -0.000152588 0.128691 -0.000152588 0.287258V6.79843C-0.000152588 6.957 0.115807 7.08569 0.258878 7.08569H10.7928C10.9359 7.08569 11.0518 6.957 11.0518 6.79843V0.287258C11.0518 0.128691 10.9359 0 10.7928 0ZM10.5338 6.51117H0.517908V0.574515H10.5338V6.51117Z"
                fill="white"
              />
              <path
                d="M5.87298 3.57983V3.25044C6.04567 3.08383 6.12243 2.7375 6.12243 2.39183C6.12243 1.79251 5.84742 1.63376 5.50179 1.63376C5.15616 1.63376 4.86647 1.79251 4.86647 2.39183C4.86647 2.7374 5.00963 3.08383 5.09597 3.25044V3.57983C4.7506 3.63719 4.31888 3.78953 4.31888 4.22022L4.3188 4.22827V4.82538L4.93503 5.28155H6.50355L6.72329 4.24081C6.72329 3.81012 6.21835 3.63709 5.87298 3.57983Z"
                fill="white"
              />
              <path
                d="M9.91814 2.10924C9.52165 2.10924 9.19303 1.75611 9.19303 1.31641C9.19303 1.26346 9.1483 1.22526 9.10064 1.22526H1.80022C1.75247 1.22526 1.71387 1.26346 1.71387 1.31641C1.71387 1.7562 1.41236 2.11164 1.01587 2.11164C0.968125 2.11164 0.950597 2.15224 0.950597 2.20509V5.11041C0.950597 5.16336 0.968125 5.20617 1.01587 5.20617C1.41236 5.20617 1.72441 5.56859 1.72441 6.00829C1.72441 6.06124 1.75247 6.10873 1.80022 6.10873H9.10064C9.14839 6.10873 9.18699 6.06124 9.18699 6.00829C9.18699 5.56859 9.52174 5.20856 9.91823 5.20856C9.96598 5.20856 10.0167 5.16327 10.0167 5.11041V2.20499C10.0167 2.15224 9.96589 2.10924 9.91814 2.10924ZM2.47542 4.37053C2.14421 4.37053 1.87577 4.07284 1.87577 3.70553C1.87577 3.33832 2.14421 3.04053 2.47542 3.04053C2.80664 3.04053 3.07508 3.33832 3.07508 3.70553C3.07508 4.07274 2.80664 4.37053 2.47542 4.37053ZM5.49546 5.52138C4.75429 5.52138 4.15359 4.66555 4.15359 3.60968C4.15359 2.55382 4.75429 1.69808 5.49546 1.69808C6.23646 1.69808 6.83732 2.55392 6.83732 3.60968C6.83732 4.66545 6.23646 5.52138 5.49546 5.52138ZM8.511 4.37053C8.17996 4.37053 7.91135 4.07284 7.91135 3.70553C7.91135 3.33832 8.17996 3.04053 8.511 3.04053C8.84222 3.04053 9.11066 3.33832 9.11066 3.70553C9.11075 4.07274 8.84222 4.37053 8.511 4.37053Z"
                fill="white"
              />
            </svg>
            <span>{data.riskLevel}</span>
          </li>
        </ul>
        <div
          className={`${
            opneDescriptions ? "block" : "hidden"
          } text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] px-[13px] py-[8px]`}
        >
          <p className="pb-[5px]">
            <span className="font-bold">${data.name}</span> just announced an
            acquisition of <span className="font-bold">${data.investment}</span>{" "}
            at
            <span className="font-bold"> $200 B.</span>
          </p>
          <p>
            This is an{" "}
            <span>
              <a href="#"> arbitrage opportunity</a>
            </span>
            , with the max gain being %X if the deal closes, but the possible
            risk is %Y  if the deal fails, If the deal success is % and
            therefore the recommended play is{" "}
            <span>
              <a href="#">long/short</a>
            </span>
            $ABC
          </p>
        </div>
      </div>
    </>
  );
}
