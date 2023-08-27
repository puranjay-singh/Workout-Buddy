const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
require('dotenv').config()          // for security purposes, it does not displays imp info/constants in the code directly

// express app
const app = express()

// middleware
app.use(express.json())              // if request has any body content (like in post and update requests), this attaches the content to "req", which then can be accessed via req.body

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        // listen for requests
        app.listen(process.env.PORT,() => {
        console.log(`Connected to db & Listening on port ${process.env.PORT}...`)
    })
    })
    .catch(error => {
        console.log(error)
    })

