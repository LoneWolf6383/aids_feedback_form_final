const {courses} = require('../models/courseModel');
const router = require('express').Router()

router.post('/', async (req, res) => {
    var courseDetails=[]
    const docs = await courses.find({})
    for (let i  = 0; i < docs.length; i++) {
        courseDetails.push(docs[i].courseName+'-'+docs[i].courseId)
    } 
    return res.send(Array.from(new Set(courseDetails)))
})

module.exports=router