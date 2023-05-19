const Competition = require('../models/Competition')
const asyncHandler = require('express-async-handler')

// @desc Get all competitions
// @route GET /competitions
// @access Private
const getAllCompetitions = asyncHandler(async (req, res) => {
    const competitions = await Competition.find()

    if (!competitions?.length) {
        return res.status(400).json({ message: 'No competitions found' })
    }

    res.json(competitions)
})

// @desc Create new competition
// @route POST /competitions
// @access Private
const createNewCompetition = asyncHandler(async (req, res) => {
    try {
        const competition = await Competition.create(req.body)
        if (competition) {
            res.status(201).json({ message: `New competition ${req.body.name} created` })
        } else {
            res.status(400).json({ message: 'Invalid competition data received' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// @desc Create new comment
// @route POST /competitions/comment
// @access Private
const createComment = asyncHandler(async (req, res) => {
    try {
        const { competitionId, comment } = req.body
        
        if(!comment)
            res.status(500).json({ message: 'Comment is required!' })

        const competition = await Competition.findById(competitionId).exec()

        if (competition) {
            competition.comments.push(comment)
            competition.save()
            res.status(200).json({ message: `Competition ${competition.name} updated.` })
        } else {
            res.status(500).json({ message: `Competition ${competitionId} could not be found!` })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// @desc Create new result
// @route POST /competitions/result
// @access Private
const createResult = asyncHandler(async (req, res) => {
    try {
        const { competitionId, result } = req.body

        if(!result)
        res.status(500).json({ message: 'Result is required!' })

        const competition = await Competition.findById(competitionId).exec()

        if (competition) {
            competition.results.push(result)
            competition.save()
            res.status(200).json({ message: `Competition ${competition.name} updated.` })
        } else {
            res.status(500).json({ message: `Competition ${competitionId} could not be found!` })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = {
    getAllCompetitions,
    createNewCompetition,
    createComment,
    createResult
}