import {z} from 'zod';


export const login = z.object({
    phoneNumber: z.string(),
    password: z.string().min(6),
  });

export type LoginFormValues = z.infer<typeof login>;
