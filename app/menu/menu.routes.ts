import { Router } from "express";
import { Route } from "../routes/routes.types";
import { ResponseHandler } from "../utils/response.handler";
import menuServices from "./menu.services";

const router = Router();

router.get('/',async (req,res,next)=>{
    try {
        const result = await menuServices.getMenu()
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

export default new Route('/menu',router)