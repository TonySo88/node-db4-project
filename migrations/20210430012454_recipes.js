exports.up = async function(knex) {
    await knex.schema.createTable("recipes", table => {
        table.increments("id")
        table.text("recipe_name").notNull().unique()
    })
    await knex.schema.createTable("steps", table => {
        table.increments("id")
        table.integer("step_number").notNull()
        table.text("instruction").notNull()
        table
            .integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")        
    })
    await knex.schema.createTable("ingredient_names", table => {
        table.increments("id")
        table.text("name").notNull().unique()
    })
    await knex.schema.createTable("ingredients", table => {
        table
            .integer("ingredient_names_id")
            .notNull()
            .references("id")
            .inTable("recipes")
            table.primary(["recipe_id", "ingredient_names_id"])
            table.real("quantity").notNull()
            table.text("quantity_mod").notNull()
    })
    };

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('ingredients_name')
    await knex.schema.dropTableIfExists('steps')
    await knex.schema.dropTableIfExists('recipes')
};