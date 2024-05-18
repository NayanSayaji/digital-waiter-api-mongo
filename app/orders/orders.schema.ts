import { model, Document } from "mongoose";
import { OrderI } from "./orders.types";
import { BaseSchema } from "../utils/base-schema";

const orderSchema = new BaseSchema(
    {
        tableNo: {
            type: Number,
            require: true
        },
        orderItemDetails: [{
            itemName: {
                type: String,
                require: true
            },
            recipe: {
                type: String,
                require: true
            },
            quantity: {
                type: Number,
                require: true
            },
            price: {
                type: Number,
                require: true
            },
            preparationTime: {
                type: Number,
                require: true,
                default:0
            },
        }],
        orderPreparationTime: {
            type: Number,
            require: true,
            default:0
        },
        totalBill: {
            type: Number,
            require: true
        },
        orderStatus: {
            type: String,
            default: 'new'
        },
        paymentStatus: {
            type: String,
            default: 'pending'
        },
    })

export const OrderModel = model<Document & OrderI>("orders", orderSchema);

