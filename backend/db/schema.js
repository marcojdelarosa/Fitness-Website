import { date } from "drizzle-orm/mysql-core";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users-table", {
    id: int().primaryKey({ autoIncrement: true}),
    passwordHash: text(),
    email: text().notNull().unique(),
    firstName: text().notNull(),
    lastName: text().notNull(),
});

// each user needs their own workout table to store previous workouts
export const userWorkoutTable = sqliteTable("user-workout-table", {
    workoutID: int().primaryKey({autoIncrement: true}),
    workoutDate: date().notNull(),
    workoutType: text().notNull(),
    // There needs to be a foreign key here belonging to the user who owns this table
})