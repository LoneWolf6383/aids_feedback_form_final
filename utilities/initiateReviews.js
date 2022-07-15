const { Course } = require('../models/courseModel')
const { Review } = require('../models/reviewModel')
const { FeedBack } = require('../models/feedbackModel')
const router = require('express').Router()
const { _ } = require('lodash')

router.post('/', async (req, res) => {
    // async function isNotReviewed() {
    //     if (await Review.findOne({ username: req.body.username })) {
    //         const userReview = await Review.findOne({ username: req.body.username })
    //         const review_array = userReview.review
    //         const arrayToObject = (review_array, key) =>
    //         Object.assign({}, ...review_array.map(item => ({ [item[key]]: item })))
    //         //while converting from array of objects to nested objects 
    //         //objects are added under the key undefined... (for some unknown reason)
    //         const review_object = arrayToObject(review_array).undefined
    //         const len = Object.values(review_object[req.body.courseName])
    //         return len.length === 0 ? true : false
    //     }   
    //     else {
    //         console.log('user not found')
    //         return false
    //     }
    // }
    try {
        let reviews = {}
        var allCourses = await Course.find({})
        var feedbackPattern = await FeedBack.find({ academicYear: req.body.academicYear, semester: req.body.semester })
        for (const key in allCourses) {
            for (const key2 in feedbackPattern) {
                // if (!await Review.find({
                //     username: req.body.username,
                //     academicYear: req.body.academicYear,
                //     semester: req.body.semester
                // })) {
                if (allCourses[key].courseId === feedbackPattern[key2].courseId) {
                    let cos = allCourses[key].CO
                    for (let key3 = 0; key3 < Object.keys(cos).length; key3++) {
                            console.log(cos[key3]); 
                            _.set(reviews, [allCourses[key].courseName, cos[key3]], 0)
                        }
                    }
                // }
            }
        }
        console.log(reviews);
        await new Review({ username:req.body.username,academicYear:req.body.academicYear,semester:req.body.semester, review: reviews }).save()
        return res.send('true')
    } catch (error) {
        return res.send('false')   
    }
})

module.exports = router