import { z } from 'zod'

export const UserValidationSchema = z.object({
  userId: z.number().int().positive(),
  username: z.string().min(1).max(255).trim(),
  password: z.string().min(1),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number().int().positive(),
  email: z.string().email(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
})
