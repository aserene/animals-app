const express = require("express")
const Animal = require("../models/animals")

const router = express.Router()

//routes
router.get("/", (req, res) => {
    res.redirect("/animals")
})
// index route
router.get("/animals", (req, res) => {
    Animal.find({})
    .then((animals) => {
      res.render("animals/index.ejs", { animals })
    })
    .catch(err => console.log(err))
})
// new route
router.get("/animals/new", (req, res) => {
  res.render("animals/new.ejs")
})
// show route
router.get("/animals/:id", (req, res) => {
  // find the particular animal from the database
  Animal.findById(req.params.id)
  .then((animal) => {
      res.render("animals/show.ejs", { animal })
  })
})
// edit route
router.get("/animals/:id/edit", (req, res) => {
  Animal.findById(req.params.id, (err, animal) => {
      // render template and send animal
      res.render("animals/edit.ejs", {animal})
  })
})
// create route
router.post("/animals", (req, res) => {
  // check if the extinct property should be true or false
  req.body.extinct = req.body.extinct === "on" ? true : false
  // create the new animal
  Animal.create(req.body, (err, animal) => {
      
      res.redirect("/animals")
  })
})
//update route
router.put("/animals/:id", (req, res) => {
  req.body.extinct = req.body.extinct === "on" ? true : false
  // update the animal
  Animal.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, animal) => {
      // redirect user back to main page when animal edit
      res.redirect("/animals")
  })
})
router.delete("/animals/:id", (req, res) => {
  Animal.findByIdAndRemove(req.params.id, (err, animal) => {
      // redirect user back to index page
      res.redirect("/animals")
  })
})

module.exports = router