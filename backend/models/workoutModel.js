const mongoose = require('mongoose')             // mongoose provides structure to mongobd, otherwise mongodb id structureless

const Schema = mongoose.Schema

const workoutSchema = new Schema({                // defines the structure of the document
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
},{ timestamps: true})

module.exports = mongoose.model('Workout',workoutSchema)  // automatically creates a collection named 'Workouts' (plural of Workout) in which several 'Workout' documents will be stored
