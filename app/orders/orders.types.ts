import z from "zod";

const pay = z.object({
    _id: z.string(),
    paymentStatus: z.enum(['pending', 'successful'])
});
export type Payment = z.infer<typeof pay>

const order = z.object({
    _id: z.string(),
    orderStatus: z.enum(['new', 'preparing', 'completed']),
});
export type Order = z.infer<typeof order>

export const orderSchema = z.object({
    tableNo: z.number().int().positive(),
    orderItemDetails: z.array(z.object({
        itemName: z.string(),
        recipe: z.string(),
        quantity: z.number(),
        price: z.number().positive(),
        preparationTime: z.number().int().positive().optional().default(10)
    })),
    orderPreparationTime: z.number().int().positive(),
    totalBill: z.number(),
    orderStatus: z.enum(['new', 'preparing', 'completed']),
    paymentStatus: z.enum(['pending', 'successful'])
});


export const OrderValidation = orderSchema.pick({ tableNo: true, orderItemDetails: true });
export const PaymentStatusValidation = orderSchema.pick({ paymentStatus: true });
export const OrderStatusValidation = orderSchema.pick({ orderStatus: true });
console.log(OrderStatusValidation);

export interface OrderI extends z.infer<typeof orderSchema> { }

