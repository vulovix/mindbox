import { z } from 'zod';

export const TagValidation = z.object({
  name: z.string().min(1),
});

export const EditTagValidation = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
});

export const DeleteTagValidation = z.object({
  id: z.coerce.number(),
});
