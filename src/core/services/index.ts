import { User, UserLogin } from "../../interfaces";
import knex from "../../database/client";
import { generatePassword } from "../utils";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function addUser(userObj: User): Promise<any> {
    const password = generatePassword(userObj.password);
    if (password) {
        const findEmail = await knex.select("*").from("users").where("email", userObj.email);
        const findContact = await knex.select("*").from("users").where("contact", userObj.contact);
        
        if (findEmail.length > 0 || findContact.length > 0) {
            return {
                message: "User already exists...",
                data: []
            };
        }
        else {
            userObj.password = password;
            const user = await knex("users").insert(userObj).returning("*");
            user.length > 0 ? delete user[0]["password"] : ""
            return {
                message: "User added successfully...",
                data: user,
            };
        }

    }
    return {
        error: "Error...",

    }
}

export async function login(userObj: UserLogin): Promise<any> {
    const user = await knex.select("*").from("users").where("email", userObj.email)    
    if (user.length > 0) {
        const isValid = bcrypt.compareSync(userObj.password,user[0].password);
        
        if (isValid) {
            const data = {
                first_name: user[0].fName,
                last_name: user[0].lName,
                email: user[0].email,
            }
            const secret = process.env.SECRET ? process.env.SECRET : ""
            const token = jwt.sign(data, secret)
            return {
                ...data,
                token
            }
        }
        return {
            message: "Credentials not valid..."
        }
    }
    return {
        message: "Credentials not valid..."
    }

}

// Update, delete, logout
