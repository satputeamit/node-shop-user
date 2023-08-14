import { User } from "../../interfaces";
import knex from "../../database/client";
import { generatePassword } from "../utils";

export async function addUser(userObj: User): Promise<any> {
    const password = generatePassword(userObj.password);
    if (password) {
        userObj.password = password;
        const user = await knex("users").insert(userObj).returning("*");       
        user.length > 0 ? delete user[0]["password"] : ""
        return {
            message: "User added successfully...",
            data: user,
        };
    }
    return {
        error: "Error...",

    }
}
