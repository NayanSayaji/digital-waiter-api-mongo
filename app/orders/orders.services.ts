import ordersRepo from "./orders.repo";
import { orderResponses } from "./orders.repsonse";
import { Order, OrderI, Payment } from "./orders.types";

const calculateTotalPayment = (orderData: Partial<OrderI>) => {
    return orderData.orderItemDetails?.map((order) => order.price * order.quantity).reduce((totalBill, currentPrice) => totalBill + currentPrice, 0) || 0;
}

const calculateOrderPreparationTime = (orderData: Partial<OrderI>) => {
    const time = orderData.orderItemDetails?.map((order) => order.preparationTime);
    return time ? Math.max(...time) : 0;
}

const getOrder = async (id:string) => {
    try {
        const result = await ordersRepo.getOrder(id);
        return result;
    } catch (e) {
        throw e
    }
}
const getAllOrders = async () => {
    try {
        const result = await ordersRepo.getAllOrders();
        return result;
    } catch (e) {
        throw e
    }
}

const addOrder = async (orderData: Partial<OrderI>) => {
    try {
        orderData.totalBill = calculateTotalPayment(orderData)
        orderData.orderPreparationTime = calculateOrderPreparationTime(orderData)
        const result = await ordersRepo.addOrder(orderData);
        if (!result) throw orderResponses.ORDER_CREATION_FAILED;
        return result;
    } catch (e) {
        throw e
    }
}


const findByIdAndUpdatePaymentStatus = async (orderData: Payment) => {
    try {
        const result = await ordersRepo.findByIdAndUpdatePaymentStatus(orderData)
    } catch (e) {

    }
}
const findByIdAndUpdateOrderStatus = async (orderData: Order) => {
    try {
        const result = await ordersRepo.findByIdAndUpdateOrderStatus(orderData)
    } catch (e) {

    }
}

export default {
    getOrder,
    getAllOrders,
    addOrder,
    findByIdAndUpdateOrderStatus,
    findByIdAndUpdatePaymentStatus
}