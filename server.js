require("dotenv").config() // Load ENV 
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override")

const AnimalRouter = require("./controllers/animal-controller")

const app = express()

app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically
app.use(AnimalRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`The server is listening on port ${PORT}...`))