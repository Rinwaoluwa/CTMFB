import {z} from 'zod';

export const signup = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6),
});
export type SignUpFormValues = z.infer<typeof signup>;

export const sigin = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

export type SignInFormValues = z.infer<typeof sigin>;
