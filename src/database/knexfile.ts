import type { Knex } from "knex";


const { DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME } = process.env;
  
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
