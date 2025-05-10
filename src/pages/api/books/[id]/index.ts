import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/mongoose';
import { Book } from '@/models/book';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deletedBook = await Book.findByIdAndDelete(id);
      if (!deletedBook)
        return res.status(404).json({ error: 'Book not found' });
      return res
        .status(200)
        .json({ message: 'Book deleted', book: deletedBook });
    } catch (err) {
      return res.status(500).json({ error: `Failed to delete book: ${err}` });
    }
  }

  res.status(405).end(); // Method Not Allowed
}
