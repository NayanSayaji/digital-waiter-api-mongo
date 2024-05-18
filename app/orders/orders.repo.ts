import { OrderModel } from "./orders.schema";
import { Order, OrderI, Payment } from "./orders.types";

const getOrder = async (id:string) => {
    try {
        return await OrderModel.findById(id);
    } catch (e) {
        throw e
    }
}
const getAllOrders = async () => {
    try {
        return await OrderModel.find({orderStatus : {$ne:'completed'}}).sort([['createdAt', 'asc']]).exec();
    } catch (e) {
        throw e
    }
}

const addOrder = async (orderData: Partial<OrderI>) => {
    try {
        const order = await OrderModel.create((orderData));
        const response = await order.save();
        return response;
    } catch (e) {
        return false;
    }
}

const findByIdAndUpdateOrderStatus = async (orderData:Order) => {
    try {
        const response = await OrderModel.findByIdAndUpdate(orderData._id, { $set: { orderStatus: orderData.orderStatus } })
        return response;
    } catch (e) {
        return false
    }
}

const findByIdAndUpdatePaymentStatus =async (orderData: Payment) => {
    try {
        const response = await OrderModel.findByIdAndUpdate(orderData._id, { $set: { paymentStatus: orderData.paymentStatus } })
        return response;
    } catch (e) {
        return false
    }
}

export default {
    getOrder,
    getAllOrders,
    addOrder,
    findByIdAndUpdatePaymentStatus,
    findByIdAndUpdateOrderStatus
}