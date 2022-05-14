const router = require('express').Router()
const {User} = require('../models/userModel')
// const joi = require('joi');
router.post('/', async (req, res) => {
    try {
        var user
        var isStudent = false
        var isFaculty = false
        // const { error } = validate(req.body)
        // if(error)
        //     return res.status(400).send({ message: error.details[0].message })
        if(User.findOne({ username: req.body.username })){
            user = await User.findOne({ username: req.body.username })
            if(user.userRole==='student')
                isStudent=true
                
            if(user.userRole==='faculty')
                isFaculty=true
                
        }
        if(!isFaculty && !isStudent)
            return res.status(500).send({ message: 'User Does Not Exist' })
        if(req.body.isVerified===true){
            if (user) {
                if (req.body.password === user.password) {
                    console.log({ message: 'login Successfull' })
                    if (isFaculty)
                        return res.send('/facultyDashboard')
                    if(isStudent)
                        return res.send('/feedback')
                }
                else    
                    return res.status(400).send({ message: 'Invalid password/Admission Number' })
            }
        }
        else
            return res.status(500).send({message:'Invalid Captcha Retry'})
        // res.send({ data:() => {
        //     return jwt.sign({ _id: this._id }, 'jwt-private-key', { expiresIn: '7d' })
        // },message:"logged in successfully"})
    } catch (error) {
        return res.status(500).send({ message:"Internal Server Error"})
    }
})
// const validate = (data) => {
//     const schema = joi.object({
//         username: joi.string().required().label('username'),
//         password: joi.string().required().label('password'),
        
//     })
//     return schema.validate(data)
// }
module.exports = router
