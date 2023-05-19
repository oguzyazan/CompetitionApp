const express = require('express')
const router = express.Router()
const competitionController = require('../controllers/competitionController')

router.route('/')
    .get(competitionController.getAllCompetitions)
    .post(competitionController.createNewCompetition)

router.route('/comment')
    .post(competitionController.createComment)

router.route('/result')
    .post(competitionController.createResult)

module.exports = router