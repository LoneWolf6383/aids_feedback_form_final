const mongoose = require('mongoose');

const feedBackSchema = new mongoose.Schema(
    {
        facultyUserName: { type: String, requried: true },
        academicYear: { type: String, required: true},
        semester: { type: String, required: true},
        courseId: { type: String, required: true },
        courseName: { type: String, required: true },
    },
    {collection:'CO_Feedback_Interface'}
)

const FeedBack = mongoose.model('FeedBack',feedBackSchema)
module.exports={FeedBack}