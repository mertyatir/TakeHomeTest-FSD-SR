"use client"

import React, { useContext } from "react"

import SearchInput from "./SearchInput"

import { AppContext } from "@/contexts/AppContext"

import AppsIcon from "@mui/icons-material/Apps"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SettingsIcon from "@mui/icons-material/Settings"
import GoogleIcon from "@mui/icons-material/Google"

const Header = () => {
  const { toggleSettings } = useContext(AppContext)

  return (
    <header className="flex items-center justify-between bg-gray-100 shadow p-4">
      {/* Logo */}
      <div className="text-xl items-center flex-row flex">
        <GoogleIcon />
        <div className="ml-1">Gmail</div>
      </div>

      {/* Search Input */}
      <SearchInput />

      <div className="flex flex-row gap-5">
        <div onClick={toggleSettings} className="cursor-pointer">
          {/* Settings Icon */}
          <div>
            <SettingsIcon />
          </div>
        </div>
        <div>
          <AppsIcon />
        </div>
        <div>
          <AccountCircleIcon />
        </div>
      </div>
    </header>
  )
}

export default Header
