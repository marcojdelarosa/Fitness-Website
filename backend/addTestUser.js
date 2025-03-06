import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
const db = drizzle(process.env.DB_FILE_NAME);
import { usersTable } from './db/schema.js';
import { hash } from './auth.js';

await db.update(usersTable).set({password: hash("MM")})