import { NextResponse } from 'next/server';

import { db } from '@main/libs/database';
import { tagSchema } from '@main/libs/database/schema/tag';
import { TagValidation } from '@main/libs/database/validations/tag';
import { desc } from 'drizzle-orm';

export const GET = async (request: Request) => {
  try {
    const notes = await db.select().from(tagSchema).orderBy(desc(tagSchema.updated_at));
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}

export const POST = async (request: Request) => {
  const json = await request.json();
  const parse = TagValidation.safeParse(json);


  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    const [tag] = await db
      .insert(tagSchema)
      .values(parse.data)
      .returning();


    return NextResponse.json(tag);
  } catch (error) {
    console.error(error, 'An error occurred while creating a guestbook');

    return NextResponse.json({}, { status: 500 });
  }
};
