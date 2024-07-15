import { integer, pgTable, serial, text, timestamp, primaryKey, boolean } from 'drizzle-orm/pg-core';
import { userSchema } from './user';
import { tagSchema } from './tag';

export const blogSchema = pgTable('blog', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content'),
    image: text('image'),
    isPublic: boolean('is_public').default(false),
    userId: integer("user_id").references(() => userSchema.id, { onDelete: 'cascade' }).notNull(),
    created_at: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    updated_at: timestamp('updated_at', { mode: 'date' }).defaultNow().$onUpdate(() => new Date()).notNull(),
});

export const blogTagSchema = pgTable('blog_tag', {
    blogId: integer('note_id').references(() => blogSchema.id, { onDelete: 'cascade' }).notNull(),
    tagId: integer('tag_id').references(() => tagSchema.id, { onDelete: 'cascade' }).notNull(),
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.blogId, table.tagId] }),
    }
});