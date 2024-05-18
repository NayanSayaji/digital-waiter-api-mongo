import { Application, json, NextFunction, Request, Response, } from "express";
import { routes } from './routes.data'
import { ResponseHandler } from "../utils/response.handler";
import cors from 'cors'

export const registerMiddlewares = (app: Application) => {
    app.use(json())
    app.use(cors())

    for (let route of routes) {
        app.use("/api/v1"+route.path, route.router)
    }

    // error handler middlware
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(
            new ResponseHandler(null, err)
        )
    })
}

