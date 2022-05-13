const router = require('express').Router()
const {feedBack} = require('../models/feedbackModel');
router.post('/', async (req, res) => {
    try {
        if (await feedBack.findOne({...req.body}))
            return res.status(200).send({message:'Feedback already exists'})
        else {
            await new feedBack({...req.body}).save()
            return res.status(200).send({ message:'Feedback successfully created'})
        }
    } catch (error) {
        return res.status(500).send(error)
    }
})
module.exports = router