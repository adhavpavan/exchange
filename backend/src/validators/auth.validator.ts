import {z} from 'zod';

export const registerSchema=z.object({
    body:z.object({
        email:z.string().email('Invalid email format'),
        password:z.string().min(8,'Password must be at least 8 characters'),
        firstName:z.string().min(2,'First name must be at least 2 characters'),
        lastName:z.string().min(2,'Last name must be at least 2 characters'),
        phone:z.string().optional(),
        role: z.enum(['ADMIN','CLIENT', 'CREATOR']),
        // avatar:z.string().optional(),
        // bio:z.string().optional()
    }),
});

export const loginSchema=z.object({
    body:z.object({
        email:z.string().email('Invalid email format'),
        password:z.string(),
    }),
});