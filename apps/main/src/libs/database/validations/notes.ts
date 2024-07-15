import { z } from 'zod';

export const NoteValidation = z.object({
  title: z.string().min(1),
  content: z.string(),
  tagId: z.number().transform((value) => (value ? value : undefined)).optional(),
  categoryId: z.number().transform((value) => (value ? value : undefined)).optional(),
});

export const EditNoteValidation = z.object({
  id: z.coerce.number(),
  title: z.string().min(1),
  content: z.string(),
});

export const DeleteNoteValidation = z.object({
  id: z.coerce.number(),
});
