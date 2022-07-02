const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
    {
        regulation:{type:Number,required:true},
        courseId: { type: String, required: true },
        courseName:{type:String,required:true},
        CO: { type: Array, required: true },
    },
    {collection:'Courses'}
)
const Course = mongoose.model('courses',courseSchema)
module.exports={ Course }