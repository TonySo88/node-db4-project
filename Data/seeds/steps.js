exports.seed = async function(knex) {
    await knex("steps").insert([
        {step_number: 1, instruction: "get the thing", recipe_id: 1},
        {step_number: 2, instruction: "do the thing", recipe_id: 1},
        {step_number: 3, instruction: "eat the thing", recipe_id: 1},

        {step_number: 1, instruction: "get the thing", recipe_id: 1},
        {step_number: 2, instruction: "do the thing", recipe_id: 1},
        {step_number: 3, instruction: "eat the thing", recipe_id: 1},

        {step_number: 1, instruction: "get the thing", recipe_id: 1},
        {step_number: 2, instruction: "do the thing", recipe_id: 1},
        {step_number: 3, instruction: "eat the thing", recipe_id: 1},
    ])
}