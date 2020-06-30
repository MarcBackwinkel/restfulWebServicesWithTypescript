import { NextFunction, Request, Response } from 'express'
import { ApplicationType } from '../model/applicationType'
import { formatOutput } from '../utility/orderApiUtility'

const APPLICATION_JSON = 'application/json'

export let getApi = (req: Request, res: Response, next: NextFunction ) => {
    return formatOutput(res, { title: 'Order API'}, 200, ApplicationType.JSON)
}