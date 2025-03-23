import 'dotenv/config';
import { Router } from 'express';
import express from "express";
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';
import { usersTable } from '../db/schema.js';
import { hash, sameHash } from '../auth.js';
const db = drizzle(process.env.DB_FILE_NAME);

const loginRoutes = Router();

// test endpoint that returns all users
loginRoutes.get("/something", async (req, res) => {
    res.json(await db.select().from(usersTable));
});

// test endpoint that returns a user given a username and password.
// we should probably later use express-session for
// returning info if a user is already logged in.
loginRoutes.post("/login", async (req, res) => {
    console.log(req.body);
    const body = req.body;
    const password = body.password;
    const email = body.email;
    const [user] = await db.select()
        .from(usersTable)
        .where(eq(usersTable.email, email));
    console.log(user);
    console.log(password, user.passwordHash);
    res.json({loggedIn: await sameHash(password, user.passwordHash)});
});

loginRoutes.post("/register", async(req, res) => {
    const body = req.body;
    const password = body.password;
    const email = body.email;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const result = await db.insert(usersTable).values({
        email: email,
        passwordHash: await hash(password),
        firstName: firstName,
        lastName: lastName
    });
    console.log(result);
    res.json(result);
});

loginRoutes.post("/testRegister", async(req, res) => {
    const body = req.body;
    const password = body.password;
    const email = body.email;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const result = await db.insert(usersTable).values({
        email: email,
        passwordHash: await hash(password),
        firstName: firstName,
        lastName: lastName
    });
    console.log(result);
    res.json(result);
    await db.delete(users).where(eq(users.email, email));
});

export default loginRoutes;