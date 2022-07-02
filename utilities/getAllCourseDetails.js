const {Course} = require('../models/courseModel');
const router = require('express').Router()

router.post('/', async (req, res) => {
    var courseDetails=[]
    const docs = await Course.find({})
    for (let i  = 0; i < docs.length; i++) {
        courseDetails.push(docs[i].courseName+'-'+docs[i].courseId)
    } 
    return res.send(Array.from(new Set(courseDetails)))
})

module.exports=router