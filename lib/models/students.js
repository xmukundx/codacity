import mongoose, {Schema} from "mongoose";


const studentSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true} // Explicitly set the collection name
);

const Student = mongoose.models.Student || mongoose.model("Student",studentSchema);

export default Student;
