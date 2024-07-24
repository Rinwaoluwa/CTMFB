import {z} from 'zod';


export const login = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

export type LoginFormValues = z.infer<typeof login>;
