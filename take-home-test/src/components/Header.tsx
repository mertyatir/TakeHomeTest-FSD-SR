"use client"

import React, { useContext } from "react"

import SearchInput from "./SearchInput"

import { AppContext } from "@/contexts/AppContext"

const Header = () => {
  const { toggleSettings } = useContext(AppContext)

  return (
    <header className="flex items-center justify-between bg-white shadow p-4">
      {/* Logo */}
      <div className="text-xl font-bold">Logo Placeholder</div>

      {/* Search Input */}
      <SearchInput />

      <div className="flex flex-row gap-5">
        <div onClick={toggleSettings} className="cursor-pointer">
          {/* Settings Icon */}
          <div>Settings Icon</div>
        </div>
        <div>Apps Icon</div>
        <div>Avatar Icon</div>
      </div>
    </header>
  )
}

export default Header
