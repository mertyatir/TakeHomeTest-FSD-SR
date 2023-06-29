import React, { useState } from "react"

const SearchInput = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="relative">
      {/* Search Input */}

      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="absolute inset-y-0 right-0 flex items-center pl-2">
          <button
            type="button"
            className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 w-full"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform duration-200 ease-in-out"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path fillRule="evenodd" d="M10 15l5-6H5l5 6z" />
            </svg>
          </button>
        </div>
      </div>
      {/* Dropdown for Filtering Options */}

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-md py-2 px-4 w-full">
          <input
            type="text"
            placeholder="Text Input 1"
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Text Input 2"
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Apply
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchInput
