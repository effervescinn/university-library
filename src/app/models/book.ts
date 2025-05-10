import { Schema, model, models } from 'mongoose';

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  year: Number,
});

export const Book = models.Book || model('Book', BookSchema);
