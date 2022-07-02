const router = require('express').Router()
const {Course} = require('../models/courseModel')
const { route } = require('./addFeedback')

router.post('/', async (req, res) => {
    try {
        if(await Course.findOne({...req.body}))
            return res.send('Course Already Exists')
        else {
            await new Course({...req.body}).save()
            return res.send('Course Added Successfully')
        }
    }
    catch (error) {
        return res.send('Error Occurred while adding course')
    }
})

module.exports  = router