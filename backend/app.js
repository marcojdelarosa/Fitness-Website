import 'dotenv/config';
import cors from "cors";
import { drizzle } from 'drizzle-orm/libsql';
const db = drizzle(process.env.DB_FILE_NAME);
import express from "express";
import { usersTable } from './db/schema.js';
import { sameHash } from './auth.js';
import bodyParser from 'body-parser';
import { eq } from 'drizzle-orm';

const app = express();
const PORT = 3000;

// use bodyParser for capability to parse the bodies of REST requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use cors to allow access from frontend
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173']
}));

// test endpoint that returns all users
app.get("/something", async (req, res) => {
    res.json(await db.select().from(usersTable));
});

// test endpoint that returns a user given a username and password.
// we should probably move this to auth later and use express-session for
// returning info if a user is already logged in.
app.post("/login", async (req, res) => {
    console.log(req.body);
    const body = req.body;
    const password = body.password;
    const email = body.email;
    const [user] = await db.select()
        .from(usersTable)
        .where(eq(usersTable.email, email));
    console.log(user);
    console.log(password, user.passwordHash)
    res.json({loggedIn: await sameHash(password, user.passwordHash)});
});
  
// run the app on the port
app.listen(PORT, () => {
    console.log(`Ready at https://localhost:${PORT}!`);
    fetch("http://localhost:3000/something")
       .then((value) => value.json()
       .then(thing => console.log(thing)));
})