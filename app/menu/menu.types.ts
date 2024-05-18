import z from "zod";

export const menuSchema = z.object({
    name: z.string(),
    price: z.string(),
    description: z.string(),
    recipe: z.string(),
    preparationTime: z.number().int().positive(),

})

export interface MenuI extends z.infer<typeof menuSchema> { };