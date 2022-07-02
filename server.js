const express = require('express')
const cors = require('cors')
const app = express()
const connection = require('./db')
const authRoutes = require('./routes/auth')
const submitReviewRoutes = require('./routes/submitReview');
const addFeedBackRoutes = require('./routes/addFeedback')
const addCourseRoutes = require('./routes/addCourse')
const getAllCourseDetails = require('./utilities/getAllCourseDetails')
const getFeedbackPattern = require('./utilities/getFeedbackPattern')
const getRatings = require('./utilities/getRatings')
const isReviewed = require('./utilities/isReviewed')
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connection()
app.use(cors())
app.use(express.json())

app.use('/feedback/signin',authRoutes)
app.use('/feedback/review',submitReviewRoutes)
app.use('/addFeedBack', addFeedBackRoutes)
app.use('/addCourse', addCourseRoutes)
app.use('/getAllCourseDetails', getAllCourseDetails)
app.use('/getFeedbackPattern', getFeedbackPattern)
app.use('/getRatings',getRatings)
app.use('/isReviewed',isReviewed)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('Server fired up at',port);
})