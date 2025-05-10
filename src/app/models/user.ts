import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['reader', 'librarian', 'admin'],
      required: true,
    },
    membershipDate: { type: Date }, // только для reader
    employeeId: { type: String }, // только для librarian
    hireDate: { type: Date }, // только для librarian
  },
  { timestamps: true },
);

export default models.User || model('User', userSchema);
