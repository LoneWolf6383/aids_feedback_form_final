const mongoose = require('mongoose')
    
const reviewSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        review:{type:Array,required:true}
    },
    {
        collection:'review_info'
    }
)

const Review = mongoose.model('review', reviewSchema)
module.exports= {Review}