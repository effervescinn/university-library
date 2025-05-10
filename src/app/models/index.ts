// // models/User.ts
// import mongoose, { Schema, model, models } from 'mongoose'

// const userSchema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['reader', 'librarian', 'admin'], required: true },
//   membershipDate: { type: Date },           // только для reader
//   employeeId: { type: String },             // только для librarian
//   hireDate: { type: Date }                  // только для librarian
// }, { timestamps: true })

// export default models.User || model('User', userSchema)

// // models/Book.ts
// import mongoose, { Schema, model, models } from 'mongoose'

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   isbn: { type: String, required: true },
//   publicationYear: Number,
//   genre: String,
//   totalCopies: Number,
//   availableCopies: Number,
// }, { timestamps: true })

// export default models.Book || model('Book', bookSchema)

// // models/Order.ts
// import mongoose, { Schema, model, models, Types } from 'mongoose'

// const orderSchema = new Schema({
//   readerId: { type: Types.ObjectId, ref: 'User', required: true },
//   bookIds: [{ type: Types.ObjectId, ref: 'Book' }],
//   status: {
//     type: String,
//     enum: ['reserved', 'borrowed', 'returned', 'cancelled'],
//     default: 'reserved'
//   },
//   createdAt: { type: Date, default: Date.now },
//   borrowDate: Date,
//   returnDate: Date
// })

// export default models.Order || model('Order', orderSchema)

// // models/Feedback.ts
// import mongoose, { Schema, model, models, Types } from 'mongoose'

// const feedbackSchema = new Schema({
//   readerId: { type: Types.ObjectId, ref: 'User', required: true },
//   message: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
//   status: {
//     type: String,
//     enum: ['new', 'reviewed', 'replied'],
//     default: 'new'
//   }
// })

// export default models.Feedback || model('Feedback', feedbackSchema)
