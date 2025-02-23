import React from "react";
import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300 w-full">
      {/* Book Image */}
      <div className="relative w-full h-56">
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Book Info */}
      <div className="p-5">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {book.title}
        </h5>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          By <span className="font-semibold">{book.author.name}</span>
        </p>

        {/* Read More Button */}
        <Link
          href={`/book/${book._id}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
