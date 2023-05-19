const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
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
    }
})

commentSchema.pre('validate', function (next) {
    if (!this.content)
        return next(new Error('Content name is required!'))

    if (!this.creatorName)
        return next(new Error('Creator name is required!'))

    next();
});

module.exports = commentSchema