exports.seed = async function(knex) {
    await knex("recipes").insert([
        {recipe_name: "Lamb and Tuna Fish"},
        {recipe_name: "Hors D'oeurve (Double Quarter Pounders with Cheese)"},
        {recipe_name: "Bread and Water"}
    ])
}