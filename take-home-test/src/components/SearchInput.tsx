import React, { useState } from "react"

import SearchIcon from "@mui/icons-material/Search"

import TuneIcon from "@mui/icons-material/Tune"

const SearchInput = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="relative w-2/5 mx-5">
      {/* Search Input */}

      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon />
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center px-4">
          <button type="button" onClick={toggleDropdown}>
            <TuneIcon />
          </button>
        </div>
      </div>
      {/* Dropdown for Filtering Options */}

      {isDropdownOpen && (
        <div className="absolute h-40 right-0 mt-2 bg-white rounded-md py-2 px-4 w-full">
          <div className="flex flex-row items-center">
            <p className="ml-5 text-gray-400"> From</p>
            <input
              type="text"
              placeholder=""
              className=" w-4/5 pl-8 pr-4  ml-auto border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="ml-5 text-gray-400"> To</p>

            <input
              type="text"
              placeholder=""
              className="w-4/5 pl-8 pr-4  ml-auto border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          <button className="absolute bottom-2 right-5 left-auto px-4 py-2  text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchInput
