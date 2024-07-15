import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { userSchema } from "./user";

export const tagSchema = pgTable('tag', {
    id: serial('id').primaryKey(),
    name: text('name').notNull().unique(),
    isPublic: boolean('is_public').default(false),
    created_at: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    updated_at: timestamp('updated_at', { mode: 'date' }).defaultNow().$onUpdate(() => new Date()).notNull(),
    // userId: integer("user_id").references(() => userSchema.id, { onDelete: 'cascade' }).notNull(),
});
