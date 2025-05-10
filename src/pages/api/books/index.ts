import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/mongoose';
import { Book } from '@/models/book';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectToDatabase();

  // if (req.method === "POST") {
  //     const { title, author, year } = req.body;

  //     try {
  //         const book = await Book.create({ title, author, year });
  //         return res.status(201).json(book);
  //     } catch (error) {
  //         return res.status(400).json({ error: `Error creating book: ${error}` });
  //     }
  // }

  if (req.method === 'GET') {
    const books = await Book.find({});
    return res.status(200).json(books);
  }

  res.status(405).end(); // Method Not Allowed
}
