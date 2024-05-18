import z from "zod";

export const cartSchema = z.object({
    itemName: z.string(),
    quantity: z.number().int().positive(),
    price: z.number().positive(),
})
export interface CartI extends z.infer<typeof cartSchema> { }
