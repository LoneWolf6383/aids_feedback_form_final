const { feedBack } = require('../models/feedbackModel');
const { courses } =require('../models/courseModel')
const router = require('express').Router()

router.post('/', async (req, res) => {
    var allCourses = await courses.find({})
    var finalCourseDetails=[]
    var feedbackPattern = await feedBack.find({})
    for (const key in allCourses) {
        for (const key2 in feedbackPattern) {
            if(allCourses[key].courseId === feedbackPattern[key2].courseId)
                finalCourseDetails.push([allCourses[key].courseName,allCourses[key].CO])
        }
    }
    return res.send(finalCourseDetails)
})

module.exports=router