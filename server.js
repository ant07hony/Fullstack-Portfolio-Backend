// IMPORT DEPENDENCIES
const express = require("express")
const cors = require("cors")

// IMPORT JSON FILES
const projects = require("./projects.json")
const about = require("./about.json")

// CREATE THE APP OBJECT
const app = express()

// SET UP MIDDLEWARE
app.use(cors())

// HOME ROUTE FOR TESTING APP
app.get("/", (req,res,next)=>{
    res.send("Hello World")
})

// ROUTE FOR RETRIEVING PROJECTS
app.get("/projects", (req,res,next)=>{
    // send projects via JSON
    res.json(projects)
})

// ROUTE FOR RETRIEVING ABOUT INFO
app.get("/about", (req,res,next)=>{
    // send projects via JSON
    res.json(about)
})

// DECLARE VARIABLE FOR PORT NUMBER
const PORT = process.env.PORT || 4000

// TURN ON THE SERVER LISTENER
app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`))