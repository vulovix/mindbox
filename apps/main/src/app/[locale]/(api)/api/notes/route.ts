import { NextRequest, NextResponse } from 'next/server';

import { db } from '@main/libs/database';
import { categorySchema, noteCategorySchema, noteSchema, noteTagSchema, tagSchema } from '@main/libs/database/schema';
import { desc, eq } from 'drizzle-orm';
import { NoteValidation } from '@main/libs/database/validations/notes';

export const GET = async (request: NextRequest) => {
  try {
    const tag = request.nextUrl.searchParams.get('tag');
    const category = request.nextUrl.searchParams.get('category');

    if (tag) {
      const response = await db.select({
        id: noteSchema.id,
        title: noteSchema.title
      })
        .from(noteTagSchema)
        .leftJoin(noteSchema, eq(noteTagSchema.noteId, noteSchema.id))
        .leftJoin(tagSchema, eq(noteTagSchema.tagId, tagSchema.id))
        .where(eq(tagSchema.id, parseInt(tag)))
        .orderBy(desc(noteSchema.updated_at));
      return NextResponse.json(response)
    }

    if (category) {
      const response = await db.select({
        id: noteSchema.id,
        title: noteSchema.title
      })
        .from(noteCategorySchema)
        .leftJoin(noteSchema, eq(noteCategorySchema.noteId, noteSchema.id))
        .leftJoin(categorySchema, eq(noteCategorySchema.categoryId, categorySchema.id))
        .where(eq(categorySchema.id, parseInt(category)))
        .orderBy(desc(noteSchema.updated_at));
      return NextResponse.json(response)
    }

    return NextResponse.json([])
  } catch (error) {
    console.error(error, 'An error occurred while fetching notes.');
    return NextResponse.json([], { status: 500 });
  }
}


export const POST = async (request: Request) => {
  const json = await request.json();
  const parse = NoteValidation.safeParse(json);


  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  const { tagId, categoryId, ...parseData } = parse.data;
  try {
    const [note] = await db
      .insert(noteSchema)
      .values(parseData)
      .returning();

    if (tagId) {
      const [noteTag] = await db
        .insert(noteTagSchema)
        .values({ noteId: note.id, tagId })
        .returning();
    }

    if (categoryId) {
      const [noteCategory] = await db
        .insert(noteCategorySchema)
        .values({ noteId: note.id, categoryId })
        .returning();
    }

    return NextResponse.json(note);
  } catch (error) {
    console.error(error, 'An error occurred while creating a guestbook');

    return NextResponse.json({}, { status: 500 });
  }
};


// export const PUT = async (request: Request) => {
//   const json = await request.json();
//   const parse = EditGuestbookValidation.safeParse(json);

//   if (!parse.success) {
//     return NextResponse.json(parse.error.format(), { status: 422 });
//   }

//   try {
//     await db
//       .update(guestbookSchema)
//       .set({
//         body: parse.data.body,
//         username: parse.data.username,
//       })
//       .where(eq(guestbookSchema.id, parse.data.id));

//     console.log('A guestbook entry has been updated');

//     return NextResponse.json({});
//   } catch (error) {
//     console.error(error, 'An error occurred while updating a guestbook');

//     return NextResponse.json({}, { status: 500 });
//   }
// };

// export const DELETE = async (request: Request) => {
//   const json = await request.json();
//   const parse = DeleteGuestbookValidation.safeParse(json);

//   if (!parse.success) {
//     return NextResponse.json(parse.error.format(), { status: 422 });
//   }

//   try {
//     await db
//       .delete(guestbookSchema)
//       .where(eq(guestbookSchema.id, parse.data.id));

//     console.log('A guestbook entry has been deleted');

//     return NextResponse.json({});
//   } catch (error) {
//     console.error(error, 'An error occurred while deleting a guestbook');

//     return NextResponse.json({}, { status: 500 });
//   }
// };
