const mongoose = require('mongoose')
const jwt = require('json-web-token');
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity');


const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true,unique:true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, },
        userRole:{ type:String },
    },
    {collection:'userLogIn'}
)

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id }, 'jwt-private-key', { expiresIn: '7d' })
    return token
}
const User = mongoose.model('user', userSchema)

const validate = (data) => {
    const schema = joi.object({
        name: joi.string().required().label('name'),
        username: joi.string().required().label('username'),
        password:passwordComplexity().required().label('password')
    })
    return schema.validate(data)
}

module.exports = {User,validate}