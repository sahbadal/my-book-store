import React from "react";
import { Book } from "@/types";
import Image from "next/image";
import Download from "./components/Download";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {

  let book: Book | null = null;

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/books/${params.bookId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }

    book = await response.json();
  } catch (error: any) {
    console.log(error.message);
  }

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-red-500">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl m-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Book Details */}
        <div>
          <h1 className="text-3xl font-bold text-blue-600 dark:text-white mb-4">
            {book.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {book.description}
          </p>

          <Download  fileLink = {book.file} />

        </div>

        {/* Right Side: Book Cover Image */}
        <div className="relative w-full h-[450px] shadow-lg rounded-lg overflow-hidden">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
