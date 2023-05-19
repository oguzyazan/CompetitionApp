const mongoose = require('mongoose')
const { isArrayEmptyOrInvalid } = require('../util/helper')
const competitorSchema = require('./Competitor');
const commentSchema = require('./Comment');
const resultSchema = require('./Result');

const competitionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creatorName: {
        type: String,
        required: true
    },
    creationTime: {
        type: Date,
        required: true,
        default: new Date()
    },
    competitors: [competitorSchema],
    comments: [commentSchema],
    results: [resultSchema]
})

competitionSchema.pre('validate', function (next) {
    if (!this.name)
        return next(new Error('Name is required!'))

    if (!this.creatorName)
        return next(new Error('Creator name is required!'))

    if (isArrayEmptyOrInvalid(this.competitors))
        return next(new Error('At least two competitors are required!'))

    next();
});


module.exports = mongoose.model('Competition', competitionSchema)