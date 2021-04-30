const express = require('express')
const model = require("./recipes-model")
const router = express.Router()

router.get("/recipes", async (req, res, next) => {
    try {
        const recipes = await model.getAllRecipes()
        res.status(200).json(recipes)
    } catch(err) {
        next(err)
    }
})

router.get("/recipes/:id/ingredients", async(req, res, next) => {
    try {
        const ingredients = await model.getGroceryList(req.params.id)
        res.status(200).json(ingredients)
    } catch(err) {
        next(err)
    }
})

router.get("/recipes/:id/steps", async(res, res, next) => {
    try {
        const steps = await model.getInstructions(req.params.id)
        res.status(200).json(steps)
    } catch(err) {
        next(err)
    }
})

module.exports = router