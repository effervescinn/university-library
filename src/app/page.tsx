'use client';
import { useEffect, useState } from 'react';

interface Book {
  _id: string;
  title: string;
  author?: string;
  year?: number;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  const getBooks = () => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  // const createBook = (title: string, author: string, year: number) => {
  //   fetch("/api/books/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title, author, year }),
  //   })
  //     .then((res) => res.json())
  //     .then(() => getBooks())
  //     .catch((err) => console.error(err));
  // };

  const deleteBookById = (id: string) => {
    fetch(`/api/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => getBooks());
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <p>
              {book._id} | {book.title} — {book.author} ({book.year} )
            </p>
            <button onClick={() => deleteBookById(book._id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
