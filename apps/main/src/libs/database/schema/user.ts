import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const userSchema = pgTable('user', {
    id: serial('id').primaryKey(),
    email: text('email').notNull(),
    created_at: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    updated_at: timestamp('updated_at', { mode: 'date' }).defaultNow().$onUpdate(() => new Date()).notNull(),
});