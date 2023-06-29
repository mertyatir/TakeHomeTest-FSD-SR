import React from "react"

const ExtendedSidebar = () => {
  return (
    <aside className="w-64 bg-gray-200">
      <nav>
        <ul className="py-4">
          <li className="mb-2">
            <a href="#" className="font-bold text-blue-600">
              Inbox
            </a>
          </li>
          <li className="pl-4 mb-2">
            <a href="#" className="text-gray-700">
              Primary
            </a>
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
        <ul className="py-4">
          <li className="mb-2">
            <a href="#" className="font-bold text-blue-600">
              Categories
            </a>
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

export default ExtendedSidebar
