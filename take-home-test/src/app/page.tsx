"use client"

import React, { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

import Header from "../components/Header"
import MailPanel from "../components/MailPanel"
import SettingsPanel from "../components/SettingsPanel"
import Sidebar from "../components/Sidebar"
import MailPopup from "@/components/MailPopup"

export default function Home() {
  const { showSettings, showMailPopup, showExtendedSidebar } =
    useContext(AppContext)

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div
          className={`transform transition-transform duration-300 ${
            showMailPopup && !showExtendedSidebar
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          {showMailPopup && !showExtendedSidebar && <MailPopup />}
        </div>
        <div className="flex flex-col flex-grow">
          <Header />
          <div className="flex flex-row ">
            <MailPanel />

            <div
              className={`transform transition-transform duration-300 ${
                showSettings ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {showSettings && <SettingsPanel />}
            </div>
          </div>
          M
        </div>
      </div>
    </main>
  )
}
