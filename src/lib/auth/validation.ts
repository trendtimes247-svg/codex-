import { z } from "zod";
export const loginSchema = z.object({ email: z.string().email(), password: z.string().min(12), csrfToken: z.string().uuid() });
export const profileSchema = z.object({ name: z.string().min(2), email: z.string().email(), newsletter: z.boolean(), donationReceipts: z.boolean(), volunteerUpdates: z.boolean() });
