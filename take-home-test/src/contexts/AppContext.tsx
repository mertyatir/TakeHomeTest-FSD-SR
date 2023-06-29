"use client"

import React, { createContext, useState } from "react"

type AppContextType = {
  showSettings: boolean
  toggleSettings: () => void
  showExtendedSidebar: boolean
  toggleExtendedSidebar: () => void
}

type AppProviderProps = {
  children: React.ReactNode
}

const initialContext: AppContextType = {
  showSettings: false,
  toggleSettings: () => {},
  showExtendedSidebar: false,
  toggleExtendedSidebar: () => {},
}

export const AppContext = createContext<AppContextType>(initialContext)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false)
  const [showExtendedSidebar, setShowExtendedSidebar] = useState(false)

  const toggleSettings = () => {
    setShowSettings(!showSettings)
  }

  const toggleExtendedSidebar = () => {
    setShowExtendedSidebar(!showExtendedSidebar)
  }

  const contextValue: AppContextType = {
    showSettings,
    toggleSettings,
    showExtendedSidebar,
    toggleExtendedSidebar,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
