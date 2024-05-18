import { Router } from "express";
import { Route } from "../routes/routes.types";
import { ResponseHandler } from "../utils/response.handler";
import { addOrderValidation, updateOrderStatusValidation, updatePaymentStatusValidation } from "./orders.validations";
import ordersServices from "./orders.services";
const router = Router();

router.get('/orders', async (req, res, next) => {
    try {
        const result = await ordersServices.getAllOrders();
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})
router.get('/order/:orderId', async (req, res, next) => {
    try {
        const result = await ordersServices.getOrder(req.params.orderId);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

router.post('/order', ...addOrderValidation, async (req, res, next) => {
    try {
        
        const result = await ordersServices.addOrder(req.body);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

router.put('/order/payment/:orderId',...updatePaymentStatusValidation, async (req, res, next) => {
    try {
        const input = {...req.body, _id:req.params.orderId }
        const result = await ordersServices.findByIdAndUpdatePaymentStatus(input);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

router.put('/order/:orderId', ...updateOrderStatusValidation,async (req, res, next) => {
    try {
        const input = {...req.body, _id:req.params.orderId }
        const result = ordersServices.findByIdAndUpdateOrderStatus(input);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})


export default new Route('/', router)