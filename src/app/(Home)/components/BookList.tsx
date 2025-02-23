import React from 'react'
import { Book } from '@/types';
import BookCard from './BookCard';

const BookList = async () => {

  const response = await fetch(`${process.env.BACKEND_URL}/api/books`)
  if(!response.ok) {
    throw new Error('Failed to fetch books');
  }
  const books = await response.json();
  // console.log('books',books);

  return (
    <div className="max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5 mb-10">
      {
        books.map((book: Book) => (
          <BookCard key={book._id} book={book} />
        ))
      }
    </div>
  )
}

export default BookList