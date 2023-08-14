import Knex from "knex";
// @ts-ignore
import knexStringcase from "knex-stringcase";

const DATABASE_HOST = "localhost";
const DATABASE_PORT = 5432;
const DATABASE_USER = "postgres";
const DATABASE_PASSWORD = "password";
const DATABASE_NAME = "node_shop_user";

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
