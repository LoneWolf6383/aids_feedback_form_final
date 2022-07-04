const { FeedBack } = require('../models/feedbackModel');
const { Course } =require('../models/courseModel')
const router = require('express').Router()

router.post('/', async (req, res) => {
    var allCourses = await Course.find({})
    var finalCourseDetails=[]
    var feedbackPattern = await FeedBack.find({academicYear:req.body.academicYear,semester:req.body.semester})
    for (const key in allCourses) {
        for (const key2 in feedbackPattern) {
            if(allCourses[key].courseId === feedbackPattern[key2].courseId)
                finalCourseDetails.push([allCourses[key].courseName,allCourses[key].CO])
        }
    }
    return res.send(finalCourseDetails)
})

module.exports=router