exports.seed = async function(knex) {
    await knex("ingredient_names").insert([
        {name: "Sugar"},
        {name: "Spice"},
        {name: "Everything Nice"}
    ])
}