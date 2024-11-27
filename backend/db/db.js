const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://melvin:melvin0011@cluster0.do87x1x.mongodb.net/artism");

// Define the User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    childName: { type: String },
    age: { type: Number },
    parentName: { type: String }
});

// Define the Teacher schema
const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    expertise: { type: String, required: true },
    mobileNo: { type: String, required: true }
});

// Create models
const User = mongoose.model('User', userSchema);
const Teacher = mongoose.model('Teacher', teacherSchema);

