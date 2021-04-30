const db = require('../../Data/config')

const getAllRecipes = async () => {
    const recipes = await db("recipes")
    return recipes
}

const getGroceryList = async(recipe_id) => {
    return await db("ingredients as i")
        .where("recipe_id", recipe_id)
        .innerJoin("ingredient_names as in", "i.ingredient_names_id", "in.id")
        .select("in.name", "i.quantity", "i.quantity_mod")
}

const getInstructions = async(recipe_id) => {
    const steps = await db("steps as s")
        .where("recipe_id", recipe_id)
        .innerJoin("ingredient_names as in", "i.ingredient_names_id", "in.id")
        .select("in.name", "i.quantity", "i.quantity_mod")
}

const getInstructions = async (recipe_id) => {
    const steps = await db("steps as s")
        .where("recipe_id", recipe_id)
        .innerJoin("recipes as r", "s.recipe_id", "r.id")
        .select("*")
        .orderBy("s.step_number")
    let returnObj = {
        recipe_name: steps[0].recipe_name,
        steps: []
    }
    if (steps[0].id){
        returnObj.steps = steps.map(step => {
            return {
                step_number: step.step_number,
                instruction: step.instruction
            }
        })
    }
    return returnObj
}

module.exports = {
    getAllRecipes,
    getGroceryList,
    getInstructions
}