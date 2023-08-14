import type { Knex } from "knex";


const DATABASE_HOST = "localhost"
const DATABASE_PORT = 5432
const DATABASE_USER = "postgres"
const DATABASE_PASSWORD = "password"
const DATABASE_NAME = "node_shop_user"

const config = {
    client: 'pg',
    connection: {     
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      user: DATABASE_USER,
      database: DATABASE_NAME,
      password: DATABASE_PASSWORD     
    },
    pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: "knex_migrations",
      },
};

export default config;
