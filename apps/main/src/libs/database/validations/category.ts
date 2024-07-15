import { z } from 'zod';

export const CategoryValidation = z.object({
  name: z.string().min(1),
});

export const EditCategoryValidation = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
});

export const DeleteCategoryValidation = z.object({
  id: z.coerce.number(),
});
