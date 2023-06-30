import React from "react"

const MailPopup = () => {
  return (
    <aside className="absolute top-10 w-64 bg-white ml-5 rounded-3xl">
      <nav className="ml-5">
        <ul className="py-4">
          <li className="mb-2">
            <a href="#">Inbox</a>
          </li>
        </ul>
        <ul className="py-4">
          <li className="mb-2">
            <a href="#">Categories</a>
          </li>
          <li className="pl-4 mb-2">
            <a href="#" className="text-gray-700">
              Social
            </a>
          </li>
          <li className="pl-4">
            <a href="#" className="text-gray-700">
              Updates
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default MailPopup
