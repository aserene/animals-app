const mongoose = require("./connections")
////////////////////////////////////////////////
// Animals Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const {Schema, model} = mongoose

// make animals schema
const animalsSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

// make animal model
const Animal = model("Animal", animalsSchema)

module.exports = Animal