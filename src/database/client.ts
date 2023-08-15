import Knex from "knex";
// @ts-ignore
import knexStringcase from "knex-stringcase";

const { DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME } = process.env;

const config = knexStringcase({
  client: "pg",
  connection: {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USER,
    database: DATABASE_NAME,
    password: DATABASE_PASSWORD,
  },
  migrations: {
    directory: "src/database/migrations",
  }
});

export default Knex(config);
