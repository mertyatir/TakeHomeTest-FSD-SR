import React, { useEffect, useState } from "react"

import { Email } from "@/database"

import CropSquareIcon from "@mui/icons-material/CropSquare"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import DoubleArrowTwoToneIcon from "@mui/icons-material/DoubleArrowTwoTone"

const MailPanel = () => {
  const [selectedTab, setSelectedTab] = useState("primary")

  const [emails, setEmails] = useState<Email[]>([])

  useEffect(() => {
    fetch("/api/emails")
      .then((response) => response.json())
      .then((data) => setEmails(data))
      .catch((error) => console.error(error))
  }, [])

  /*

  const mockData = [
    {
      sender: "John Doe",
      subject: "Hello",
      receivedAt: "May 4",
    },
    {
      sender: "Jane Smith",
      subject: "Meeting Reminder",
      receivedAt: "April 29",
    },
    {
      sender: "John Doe",
      subject: "Hello",
      receivedAt: "May 4",
    },
    {
      sender: "Jane Smith",
      subject: "Meeting Reminder",
      receivedAt: "April 29",
    },
    {
      sender: "John Doe",
      subject: "Hello",
      receivedAt: "May 4",
    },
    {
      sender: "Jane Smith",
      subject: "Meeting Reminder",
      receivedAt: "April 29",
    },
  ]

  */
  return (
    <div className="flex flex-col flex-grow h-screen ">
      <div className="flex items-center justify-between bg-white  p-4">
        {/* Tabs */}
        <div className="flex justify-start w-2/5 ">
          <div
            className={`p-3 hover:bg-gray-200 cursor-pointer w-full ${
              selectedTab === "primary"
                ? "border-b-2 border-blue-500 text-blue-500 font-bold"
                : ""
            }`}
            onClick={() => setSelectedTab("primary")}
          >
            Primary
          </div>
          <div
            className={`p-3 hover:bg-gray-200 cursor-pointer w-full ${
              selectedTab === "promotions"
                ? "border-b-2 border-blue-500 text-blue-500 font-bold"
                : ""
            }`}
            onClick={() => setSelectedTab("promotions")}
          >
            Promotions
          </div>
          <div
            className={`p-3 hover:bg-gray-200 cursor-pointer  w-full ${
              selectedTab === "social"
                ? "border-b-2 border-blue-500 text-blue-500 font-bold"
                : ""
            }`}
            onClick={() => setSelectedTab("social")}
          >
            Social
          </div>
        </div>
      </div>

      {/* Email List */}
      <div className="flex-grow bg-white">
        {selectedTab === "primary" &&
          emails.map((email, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b p-4"
            >
              <div>
                <div className="flex flex-row items-center">
                  <CropSquareIcon className="mr-2" />
                  <StarBorderIcon className="mr-2" />
                  <DoubleArrowTwoToneIcon className="mr-2" />
                  <div className="font-semibold">{email.sender}</div>
                </div>
              </div>
              <div className="flex flex-row  ">
                <div className="font-semibold ml-5 ">{email.subject}</div>
                <div>
                  <p className="mx-4 line-clamp-1 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magnam maxime voluptatum facere placeat, officiis odit et,
                    debitis eius dignissimos esse eveniet! Aut dolores, vitae
                    impedit eum ullam quae suscipit architecto
                  </p>
                </div>
              </div>
              <div className="font-semibold basis-28">{email.receivedAt}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MailPanel
