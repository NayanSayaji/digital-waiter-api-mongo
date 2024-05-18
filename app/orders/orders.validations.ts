import { body,params,query } from "../utils/validation";
import { OrderStatusValidation, OrderValidation, PaymentStatusValidation } from "./orders.types";

export const addOrderValidation = [
    body(OrderValidation,true)
]

export const updateOrderStatusValidation = [
    body(OrderStatusValidation, true),
]
export const updatePaymentStatusValidation = [
    body(PaymentStatusValidation, true)
]
