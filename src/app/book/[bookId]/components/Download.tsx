"use client";
import React from 'react'

const Download = ({fileLink} : {fileLink: string}) => {

    const handleDownload = () => {
        window.open(fileLink, '_blank');
    }

  return (
    <div>
        {/* Download Button */}
        <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Download Book
            <svg
              className="w-5 h-5 ml-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 2v12m0 0l4-4m-4 4l-4-4m14 8H2"
              />
            </svg>
          </button>
    </div>
  )
}

export default Download