const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require authentication for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/',getWorkouts)

// GET a single workout
router.get('/:id',getWorkout)

// Post a new workout
router.post('/',createWorkout)
// DELETE a workout
router.delete('/:id',deleteWorkout)
// UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports = router