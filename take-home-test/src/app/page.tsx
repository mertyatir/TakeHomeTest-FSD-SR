"use client"

import React, { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

import Header from "../components/Header"
import MailPanel from "../components/MailPanel"
import SettingsPanel from "../components/SettingsPanel"
import Sidebar from "../components/Sidebar"

export default function Home() {
  const { showSettings } = useContext(AppContext)

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />

          <div className="flex flex-row ">
            <MailPanel />
            {showSettings && <SettingsPanel />}
          </div>
        </div>
      </div>
    </main>
  )
}
