import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users-table", {
    id: int().primaryKey({ autoIncrement: true}),
    email: text().notNull().unique(),
    firstName: text().notNull(),
    lastName: text().notNull(),
});