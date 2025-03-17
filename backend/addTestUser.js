import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';
const db = drizzle(process.env.DB_FILE_NAME);
import { usersTable } from './db/schema.js';
import { hash } from './auth.js';

// test script for adding a user (currently just updates one)

const hashedPass = await hash("MM")

await db
    .update(usersTable)
    .set({ passwordHash: hashedPass })
    .where(eq(usersTable.id, 9999));