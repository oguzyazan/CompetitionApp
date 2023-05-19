const mongoose = require('mongoose')

const competitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creationTime: {
        type: Date,
        required: true,
        default: new Date()
    },
    type: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
})

competitorSchema.pre('validate', function (next) {
    if (!this.name)
        return next(new Error('Competitor name is required!'))

    if (!this.type)
        return next(new Error('Competitor type is required!'))

    if (!this.source)
        return next(new Error('Competitor source is required!'))

    next();
});


module.exports = competitorSchema