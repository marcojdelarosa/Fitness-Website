import 'dotenv/config';
import cors from "cors";
import { drizzle } from 'drizzle-orm/libsql';
const db = drizzle(process.env.DB_FILE_NAME);
import express from "express";
import { usersTable } from './db/schema.js';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173']
  }));
  
app.get("/something", async (req, res) => {
    res.json(await db.select().from(usersTable));
  });
  
app.listen(PORT, () => {
    console.log(`Ready at https://localhost:${PORT}!`);
    fetch("http://localhost:3000/something").then((value) => value.json().then(thing => console.log(thing)));
})