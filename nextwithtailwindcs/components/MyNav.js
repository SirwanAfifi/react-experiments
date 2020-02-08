import React, { useState } from "react";

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
        <div>
          <img className="h-8" src="./logo.png" alt="Logo" />
        </div>
        <div>
          <button
            onClick={_ => setIsOpen(!isOpen)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen && (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}

              {!isOpen && (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="px-2 pt-2 pb-4">
          <a
            href="#"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            Home
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            About me
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default MyNav;
