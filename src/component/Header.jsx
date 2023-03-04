import React, { useState } from "react";
import {
  BiSearch,
  BiGlobe,
  BiUserCircle,
  BiMenu,
  BiUser,
} from "react-icons/bi";
import useDebounce from "./Hooks/useDebounce";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNumberOfGuest] = useState(1);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  // console.log(searchInput,"input")
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <header className="sticky h-20 top-0 my-auto z-50 grid grid-cols-3 bg-white shadow-md md:px-10 items-center">
      {/* left side */}
      <div className="relative flex items-center my-auto">
        <img
          className="h-10 fixed"
          src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
          alt="logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 outline-none bg-transparent grow"
          type="text"
          placeholder="Search Here"
        />
        <BiSearch
          className="hidden md:inline-flex flex-end md:mx-2 h-6 w-6
         bg-red-400 rounded-full p-1 curser-pointer"
        />
      </div>

      {/* right side */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p className="hidden cursor-pointer  md:inline">Become a host</p>
        <BiGlobe className="cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <BiMenu className="cursor-pointer" />
          <BiUserCircle className="cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto bg-inherit">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#f87171"]}
            onChange={handleSelect}
          />
          <div className="flex items-center  mb-4">
            <h5 className="text-2xl flex-grow font-semibold pl-4">
              Number of Guest
            </h5>
            <BiUser/>
            <input
              type="number"
              value={noOfGuest}
              min={0}
              onChange={(e) => setNumberOfGuest(e.target.value)}
              className="outline-none w-10 text-red-400 text-lg pl-2"
            />
          </div>
          <div className="flex my-2">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-600">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
