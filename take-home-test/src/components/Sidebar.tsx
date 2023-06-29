"use client"

import React, { useContext } from "react"

import ExtendedSidebar from "./ExtendedSidebar"

import { AppContext } from "@/contexts/AppContext"

const Sidebar = () => {
  const { showExtendedSidebar, toggleExtendedSidebar } = useContext(AppContext)

  return (
    <aside className="flex flex-row bg-gray-200 p-4">
      <div className="flex flex-col space-y-2">
        {/* Toggle Switch */}
        <div
          className="flex items-center mb-4 cursor-pointer"
          onClick={toggleExtendedSidebar}
        >
          <span>Toggle Extended Sidebar Icon</span>
        </div>

        {/* Menu Icons */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <span>Mail Menu Icon</span>
          </div>
          <div className="flex items-center">
            <span>Chat Menu Icon</span>
          </div>
        </div>
      </div>
      {/* Extended sidebar navigation */}

      {showExtendedSidebar && <ExtendedSidebar />}
    </aside>
  )
}

export default Sidebar
