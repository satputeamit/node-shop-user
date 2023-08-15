import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  knex.raw('create extension if not exists "uuid-ossp"')
    return knex.schema.createTable("users", (table) => {
        table.uuid("id").primary().defaultTo(knex.fn.uuid());        
        table.string("f_name").notNullable();
        table.string("l_name").notNullable();
        table.string("address").notNullable();
        table.string("email").unique().notNullable();
        table.string("contact").unique().notNullable();
        table.string("password").notNullable();   
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      });
}


export async function down(knex: Knex): Promise<void> {
  knex.raw('drop extension if exists "uuid-ossp"')
  return knex.schema.dropTable("users");
}

