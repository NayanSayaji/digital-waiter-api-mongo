import { Router } from "express";
import { Route } from "../routes/routes.types";

const router = Router();

router.post('/cart', (req, res, next) => {

})
router.delete('/cart/:itemId', (req, res, next) => {

})

export default new Route('/api/v1', router)