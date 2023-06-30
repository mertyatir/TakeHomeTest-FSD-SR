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
        <div className="absolute right-0 mt-2 bg-white rounded-md py-2 px-4 w-full">
          <input
            type="text"
            placeholder="From"
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="To"
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchInput
