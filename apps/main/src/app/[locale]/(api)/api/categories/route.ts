import { NextResponse } from 'next/server';

import { db } from '@main/libs/database';
import { categorySchema } from '@main/libs/database/schema/category';
import { CategoryValidation } from '@main/libs/database/validations/category';
import { desc } from 'drizzle-orm';

export const GET = async (request: Request) => {
  try {
    const notes = await db.select().from(categorySchema).orderBy(desc(categorySchema.updated_at));
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}

export const POST = async (request: Request) => {
  const json = await request.json();
  const parse = CategoryValidation.safeParse(json);


  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    const [tag] = await db
      .insert(categorySchema)
      .values(parse.data)
      .returning();


    return NextResponse.json(tag);
  } catch (error) {
    console.error(error, 'An error occurred while creating a guestbook');

    return NextResponse.json({}, { status: 500 });
  }
};
