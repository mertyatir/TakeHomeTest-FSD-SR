"use client"

import React, { useContext, useState, useRef } from "react"

import ExtendedSidebar from "./ExtendedSidebar"

import { AppContext } from "@/contexts/AppContext"

import MenuIcon from "@mui/icons-material/Menu"

import EmailIcon from "@mui/icons-material/Email"

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"

const Sidebar = () => {
  const { showExtendedSidebar, toggleExtendedSidebar, setShowMailPopup } =
    useContext(AppContext)

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current!)
    setShowMailPopup(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowMailPopup(false)
    }, 200)
  }

  return (
    <aside className="flex-row bg-gray-200 p-4 hidden md:flex">
      <div className="flex flex-col space-y-2">
        {/* Toggle Switch */}
        <div
          className="flex items-center mb-4 cursor-pointer"
          onClick={toggleExtendedSidebar}
        >
          <span>
            <MenuIcon />
          </span>
        </div>

        {/* Menu Icons */}
        <div className="flex flex-col space-y-2">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center justify-center flex-col cursor-pointer"
          >
            <EmailIcon />
            <div className="text-sm">Mail</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <ChatBubbleOutlineIcon />
            <div className="text-sm">Chat</div>
          </div>
        </div>
      </div>
      {/* Extended sidebar */}

      {
        // toggle animation
      }
      <div
        className={`transform transition-transform duration-300 ${
          showExtendedSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {showExtendedSidebar && <ExtendedSidebar />}
      </div>
    </aside>
  )
}

export default Sidebar
