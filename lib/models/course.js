import mongoose, {Schema} from "mongoose";


const courseSchema = new Schema(
    {
    courseName: String,
    aboutCourse:String,
    duration: String,
    price: Number,
    language: String,
    framework: String,
    level: String,
    category: String,
    popularity: String,
    }
)
const Course = mongoose.models.courses || mongoose.model("courses", courseSchema)

export default Course;