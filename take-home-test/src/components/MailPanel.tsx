import React, { useEffect, useState } from "react"

import { Email } from "@/database"

const MailPanel = () => {
  const [isPrimary, setIsPrimary] = useState(true)

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
    <div className="flex flex-col flex-grow h-screen">
      <div className="flex items-center justify-between bg-gray-100 p-4">
        {/* Tabs */}
        <div className="flex justify-start w-2/5 ">
          <div
            className="p-3 hover:bg-gray-200 cursor-pointer w-full"
            onClick={() => setIsPrimary(true)}
          >
            Primary
          </div>
          <div
            className="p-3 hover:bg-gray-200 w-full cursor-pointer"
            onClick={() => setIsPrimary(false)}
          >
            Promotions
          </div>
          <div
            className="p-3 hover:bg-gray-200 w-full cursor-pointer"
            onClick={() => setIsPrimary(false)}
          >
            Social
          </div>
        </div>
      </div>

      {/* Email List */}
      <div className="flex-grow bg-white">
        {isPrimary &&
          emails.map((email, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b p-4"
            >
              <div>
                <div className="font-semibold">{email.sender}</div>
                <div className="text-gray-500">{email.subject}</div>
              </div>
              <div className="text-gray-500">{email.receivedAt}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MailPanel
