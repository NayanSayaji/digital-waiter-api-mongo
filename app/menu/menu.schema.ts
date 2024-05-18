import { model, Document } from "mongoose";
import { MenuI } from "./menu.types";
import { BaseSchema } from "../utils/base-schema";

const menuSchema = new BaseSchema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    recipe: {
        type: String,
        require: true,
    }, 
    preparationTime: {
        type: Number,
        default: 0
    }
})

export const MenuModel = model<Document & MenuI>("menu", menuSchema);


