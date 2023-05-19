const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    winnerCompetitorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    note: {
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

resultSchema.pre('validate', function (next) {
    if (!this.winnerCompetitorId)
        return next(new Error('Winner competitor id is required!'))

    if (!this.note)
        return next(new Error('Note is required!'))

    if (!this.creatorName)
        return next(new Error('Creator name is required!'))

    next();
});

module.exports = resultSchema