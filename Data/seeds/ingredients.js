exports.seed = async function(knex) {
    await knex("ingredients").insert([
        {
            ingredient_names_id: 1,
            quantity: 1,
            quantity_mod: "dash",
            recipe_id:1
        },
        {
            ingredient_names_id: 2,
            quantity: 1,
            quantity_mod: "free pour",
            recipe_id:1
        },
        {
            ingredient_names_id: 3,
            quantity: 3,
            quantity_mod: "splash",
            recipe_id:1
        }
    ])
}