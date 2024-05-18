import { model, Document, Schema } from "mongoose";
import { CartI } from "./cart.types";

const cartSchema = new Schema({
    itemName: {
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
    }
})

export const CartModel = model<Document & CartI>("cart", cartSchema);
