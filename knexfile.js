// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './Data/recipes.db3'
    },
    migrations: {
      filename: './Data/migrations'
    },
    seeds: {
      directory: "Data/seeds"
    }
  },
};