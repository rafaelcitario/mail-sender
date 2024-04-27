import { z } from 'zod'
export const envSchema = z.object({
  user: z.string(),
  pass: z.string(),
})
