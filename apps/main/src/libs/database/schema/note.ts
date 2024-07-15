import { integer, pgTable, serial, text, timestamp, primaryKey, boolean } from 'drizzle-orm/pg-core';
import { userSchema } from './user';
import { tagSchema } from './tag';
import { categorySchema } from './category';

export const noteSchema = pgTable('note', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content'),
    isPublic: boolean('is_public').default(false),
    // userId: integer("user_id").references(() => userSchema.id, { onDelete: 'cascade' }).notNull(),
    created_at: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    updated_at: timestamp('updated_at', { mode: 'date' }).defaultNow().$onUpdate(() => new Date()).notNull(),
});

export const noteTagSchema = pgTable('note_tag', {
    noteId: integer('note_id').references(() => noteSchema.id, { onDelete: 'cascade' }).notNull(),
    tagId: integer('tag_id').references(() => tagSchema.id, { onDelete: 'cascade' }).notNull(),
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.noteId, table.tagId] }),
    }
});

export const noteCategorySchema = pgTable('note_category', {
    noteId: integer('note_id').references(() => noteSchema.id, { onDelete: 'cascade' }).notNull(),
    categoryId: integer('category_id').references(() => categorySchema.id, { onDelete: 'cascade' }).notNull(),
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.noteId, table.categoryId] }),
    }
});