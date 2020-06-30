import { NextFunction, Request, Response } from 'express'
import * as _ from 'lodash'
import { ApplicationType } from '../model/applicationType'
import { default as Order } from '../model/order'
import { OrderStatus } from '../model/orderStatus'
import { formatOutput } from '../utility/orderApiUtility'

let orders: Array<Order> = []
const APPLICATION_JSON = 'application/json'

export let getOrder = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const order = orders.find(obj => obj.id === Number(id))
  const httpStatusCode = order ? 200 : 404
  return formatOutput(res, order, httpStatusCode, ApplicationType.JSON)
}

export let getAllOrders = (req: Request, res: Response, next: NextFunction) => {
  const limit = req.query.limit || orders.length
  const offset = req.query.offset || 0

  const filteredOrders = _(orders)
    .drop(offset)
    .take(limit)
    .value(0)

  return formatOutput(res, filteredOrders, 200, ApplicationType.JSON)
}

export let addOrder = (req: Request, res: Response, next: NextFunction) => {
  const order: Order = {
    // generic random value from 1 to 100 only for tests so far
    id: Math.floor(Math.random() * 100) + 1,
    userId: req.body.userId,
    quantity: req.body.quantity,
    shipDate: req.body.shipDate,
    status: OrderStatus.Placed,
    complete: false,
  }
  orders.push(order)
  return formatOutput(res, order, 201, ApplicationType.JSON)
}

export let removeOrder = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id)
  const orderIndex = orders.findIndex(item => item.id === id)

  if (orderIndex === -1) {
    return res.status(404).send()
  }

  orders = orders.filter(item => item.id !== id)

  return formatOutput(res, {}, 204, ApplicationType.JSON)
}

export let getInventory = (req: Request, res: Response, next: NextFunction) => {
  const status = req.query.status
  let inventoryOrders = orders
  if (status) {
    inventoryOrders = inventoryOrders.filter(item => item.status === status)
  }

  const grouppedOrders = _.groupBy(inventoryOrders, 'userId')
  return formatOutput(res, grouppedOrders, 200, ApplicationType.JSON)
}


