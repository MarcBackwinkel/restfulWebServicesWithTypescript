document.querySelector('mutation-test-report-app').report = {"files":{"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/app.ts":{"language":"typescript","mutants":[{"id":"0","location":{"end":{"column":6,"line":23},"start":{"column":18,"line":16}},"mutatorName":"Block","replacement":"{}","status":"Killed"},{"id":"2","location":{"end":{"column":29,"line":17},"start":{"column":9,"line":17}},"mutatorName":"ConditionalExpression","replacement":"true","status":"RuntimeError"},{"id":"1","location":{"end":{"column":29,"line":17},"start":{"column":9,"line":17}},"mutatorName":"ConditionalExpression","replacement":"false","status":"RuntimeError"}],"source":"import * as bodyParser from 'body-parser';\nimport * as express from 'express';\nimport { APIRoute } from '../src/routes/api';\nimport { OrderRoute } from '../src/routes/order'\nimport { UserRoute } from '../src/routes/user'\nimport { Index } from './routes';\n\n\nclass App {\n    public app: express.Application\n    public indexRoutes: Index = new Index();\n    public userRoutes: UserRoute = new UserRoute();\n    public apiRoutes: APIRoute = new APIRoute();\n    public orderRoutes: OrderRoute = new OrderRoute();\n\n    constructor(){\n        this.app = express();\n        this.app.use(bodyParser.json());\n        this.indexRoutes.routes(this.app);\n        this.userRoutes.routes(this.app);\n        this.apiRoutes.routes(this.app);\n        this.orderRoutes.routes(this.app);\n    }\n}\n\nexport default new App().app"},"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/controllers/api.ts":{"language":"typescript","mutants":[{"id":"5","location":{"end":{"column":52,"line":4},"start":{"column":41,"line":4}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"4","location":{"end":{"column":53,"line":4},"start":{"column":33,"line":4}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Timeout"},{"id":"3","location":{"end":{"column":2,"line":5},"start":{"column":75,"line":3}},"mutatorName":"Block","replacement":"{}","status":"Timeout"}],"source":"import { NextFunction, Request, Response } from 'express'\n\nexport let getApi = (req: Request, res: Response, next: NextFunction ) => {\n    return res.status(200).send({title: 'Order API'})\n}"},"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/controllers/order.ts":{"language":"typescript","mutants":[{"id":"6","location":{"end":{"column":30,"line":6},"start":{"column":28,"line":6}},"mutatorName":"ArrayLiteral","replacement":"['Stryker was here']","status":"RuntimeError"},{"id":"11","location":{"end":{"column":57,"line":10},"start":{"column":36,"line":10}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"8","location":{"end":{"column":57,"line":10},"start":{"column":29,"line":10}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Timeout"},{"id":"9","location":{"end":{"column":46,"line":10},"start":{"column":43,"line":10}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Timeout"},{"id":"13","location":{"end":{"column":35,"line":16},"start":{"column":33,"line":16}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Survived"},{"id":"7","location":{"end":{"column":2,"line":13},"start":{"column":76,"line":8}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"10","location":{"end":{"column":57,"line":10},"start":{"column":36,"line":10}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"18","location":{"end":{"column":39,"line":17},"start":{"column":18,"line":17}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"21","location":{"end":{"column":42,"line":29},"start":{"column":41,"line":29}},"mutatorName":"BinaryExpression","replacement":"-","status":"Survived"},{"id":"22","location":{"end":{"column":35,"line":29},"start":{"column":34,"line":29}},"mutatorName":"BinaryExpression","replacement":"/","status":"Survived"},{"id":"14","location":{"end":{"column":49,"line":16},"start":{"column":17,"line":16}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"12","location":{"end":{"column":2,"line":24},"start":{"column":80,"line":15}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"23","location":{"end":{"column":20,"line":34},"start":{"column":15,"line":34}},"mutatorName":"BooleanSubstitution","replacement":"true","status":"Killed"},{"id":"28","location":{"end":{"column":61,"line":42},"start":{"column":47,"line":42}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"29","location":{"end":{"column":24,"line":44},"start":{"column":7,"line":44}},"mutatorName":"IfStatement","replacement":"true","status":"Killed"},{"id":"30","location":{"end":{"column":24,"line":44},"start":{"column":7,"line":44}},"mutatorName":"IfStatement","replacement":"false","status":"Killed"},{"id":"17","location":{"end":{"column":39,"line":17},"start":{"column":18,"line":17}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"31","location":{"end":{"column":21,"line":44},"start":{"column":18,"line":44}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Killed"},{"id":"15","location":{"end":{"column":49,"line":16},"start":{"column":17,"line":16}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"16","location":{"end":{"column":37,"line":17},"start":{"column":35,"line":17}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Timeout"},{"id":"19","location":{"end":{"column":2,"line":38},"start":{"column":76,"line":26}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"20","location":{"end":{"column":4,"line":35},"start":{"column":24,"line":27}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Timeout"},{"id":"34","location":{"end":{"column":49,"line":48},"start":{"column":3,"line":48}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"26","location":{"end":{"column":58,"line":42},"start":{"column":55,"line":42}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Timeout"},{"id":"24","location":{"end":{"column":2,"line":51},"start":{"column":79,"line":40}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"32","location":{"end":{"column":24,"line":44},"start":{"column":22,"line":44}},"mutatorName":"PrefixUnaryExpression","replacement":"+1","status":"Timeout"},{"id":"33","location":{"end":{"column":4,"line":46},"start":{"column":26,"line":44}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"27","location":{"end":{"column":61,"line":42},"start":{"column":47,"line":42}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"25","location":{"end":{"column":61,"line":42},"start":{"column":39,"line":42}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Timeout"},{"id":"43","location":{"end":{"column":4,"line":58},"start":{"column":15,"line":56}},"mutatorName":"Block","replacement":"{}","status":"Survived"},{"id":"49","location":{"end":{"column":76,"line":57},"start":{"column":54,"line":57}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"50","location":{"end":{"column":61,"line":60},"start":{"column":53,"line":60}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"39","location":{"end":{"column":48,"line":48},"start":{"column":34,"line":48}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"41","location":{"end":{"column":13,"line":56},"start":{"column":7,"line":56}},"mutatorName":"IfStatement","replacement":"true","status":"Timeout"},{"id":"36","location":{"end":{"column":48,"line":48},"start":{"column":26,"line":48}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Timeout"},{"id":"42","location":{"end":{"column":13,"line":56},"start":{"column":7,"line":56}},"mutatorName":"IfStatement","replacement":"false","status":"Timeout"},{"id":"38","location":{"end":{"column":48,"line":48},"start":{"column":34,"line":48}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"40","location":{"end":{"column":2,"line":62},"start":{"column":80,"line":53}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"37","location":{"end":{"column":45,"line":48},"start":{"column":42,"line":48}},"mutatorName":"BinaryExpression","replacement":"===","status":"Timeout"},{"id":"35","location":{"end":{"column":49,"line":48},"start":{"column":3,"line":48}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"44","location":{"end":{"column":77,"line":57},"start":{"column":5,"line":57}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"46","location":{"end":{"column":76,"line":57},"start":{"column":46,"line":57}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Timeout"},{"id":"47","location":{"end":{"column":69,"line":57},"start":{"column":66,"line":57}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Timeout"},{"id":"45","location":{"end":{"column":77,"line":57},"start":{"column":5,"line":57}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"48","location":{"end":{"column":76,"line":57},"start":{"column":54,"line":57}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"}],"source":"import { NextFunction, Request, Response } from 'express'\nimport * as _ from 'lodash'\nimport { default as Order } from '../model/order'\nimport { OrderStatus } from '../model/orderStatus'\n\nlet orders: Array<Order> = []\n\nexport let getOrder = (req: Request, res: Response, next: NextFunction) => {\n  const id = req.params.id\n  const order = orders.find(obj => obj.id === Number(id))\n  const httpStatusCode = order ? 200 : 404\n  return res.status(httpStatusCode).send(order)\n}\n\nexport let getAllOrders = (req: Request, res: Response, next: NextFunction) => {\n  const limit = req.query.limit || orders.length\n  const offset = req.query.offset || 0\n  return res.status(200).send(\n    _(orders)\n      .drop(offset)\n      .take(limit)\n      .value()\n  )\n}\n\nexport let addOrder = (req: Request, res: Response, next: NextFunction) => {\n  const order: Order = {\n    // generic random value from 1 to 100 only for tests so far\n    id: Math.floor(Math.random() * 100) + 1,\n    userId: req.body.userId,\n    quantity: req.body.quantity,\n    shipDate: req.body.shipDate,\n    status: OrderStatus.Placed,\n    complete: false,\n  }\n  orders.push(order)\n  return res.status(201).send(order)\n}\n\nexport let removeOrder = (req: Request, res: Response, next: NextFunction) => {\n  const id = Number(req.params.id)\n  const orderIndex = orders.findIndex(item => item.id === id)\n\n  if (orderIndex === -1) {\n    return res.status(404).send()\n  }\n\n  orders = orders.filter(item => item.id !== id)\n\n  return res.status(204).send()\n}\n\nexport let getInventory = (req: Request, res: Response, next: NextFunction) => {\n  const status = req.query.status\n  let inventoryOrders = orders\n  if (status) {\n    inventoryOrders = inventoryOrders.filter(item => item.status === status)\n  }\n\n  const grouppedOrders = _.groupBy(inventoryOrders, 'userId')\n  return res.status(200).send(grouppedOrders)\n}\n"},"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/controllers/user.ts":{"language":"typescript","mutants":[{"id":"51","location":{"end":{"column":28,"line":4},"start":{"column":26,"line":4}},"mutatorName":"ArrayLiteral","replacement":"['Stryker was here']","status":"RuntimeError"},{"id":"54","location":{"end":{"column":52,"line":8},"start":{"column":49,"line":8}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Killed"},{"id":"63","location":{"end":{"column":62,"line":31},"start":{"column":59,"line":31}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Killed"},{"id":"64","location":{"end":{"column":71,"line":31},"start":{"column":45,"line":31}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"65","location":{"end":{"column":71,"line":31},"start":{"column":45,"line":31}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed"},{"id":"59","location":{"end":{"column":46,"line":16},"start":{"column":45,"line":16}},"mutatorName":"BinaryExpression","replacement":"-","status":"Timeout"},{"id":"66","location":{"end":{"column":23,"line":33},"start":{"column":7,"line":33}},"mutatorName":"IfStatement","replacement":"true","status":"Killed"},{"id":"53","location":{"end":{"column":61,"line":8},"start":{"column":29,"line":8}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Timeout"},{"id":"56","location":{"end":{"column":61,"line":8},"start":{"column":36,"line":8}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"58","location":{"end":{"column":6,"line":24},"start":{"column":24,"line":14}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Timeout"},{"id":"55","location":{"end":{"column":61,"line":8},"start":{"column":36,"line":8}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"57","location":{"end":{"column":2,"line":27},"start":{"column":75,"line":13}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"52","location":{"end":{"column":2,"line":11},"start":{"column":75,"line":6}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"60","location":{"end":{"column":39,"line":16},"start":{"column":38,"line":16}},"mutatorName":"BinaryExpression","replacement":"/","status":"Timeout"},{"id":"61","location":{"end":{"column":2,"line":48},"start":{"column":78,"line":29}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"68","location":{"end":{"column":20,"line":33},"start":{"column":17,"line":33}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Killed"},{"id":"81","location":{"end":{"column":53,"line":40},"start":{"column":3,"line":40}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Survived"},{"id":"83","location":{"end":{"column":39,"line":40},"start":{"column":37,"line":40}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Survived"},{"id":"84","location":{"end":{"column":53,"line":40},"start":{"column":19,"line":40}},"mutatorName":"ConditionalExpression","replacement":"false","status":"RuntimeError"},{"id":"62","location":{"end":{"column":71,"line":31},"start":{"column":37,"line":31}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Timeout"},{"id":"85","location":{"end":{"column":53,"line":40},"start":{"column":19,"line":40}},"mutatorName":"ConditionalExpression","replacement":"true","status":"RuntimeError"},{"id":"87","location":{"end":{"column":44,"line":41},"start":{"column":3,"line":41}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"88","location":{"end":{"column":33,"line":41},"start":{"column":31,"line":41}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Survived"},{"id":"79","location":{"end":{"column":56,"line":39},"start":{"column":20,"line":39}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"67","location":{"end":{"column":23,"line":33},"start":{"column":7,"line":33}},"mutatorName":"IfStatement","replacement":"false","status":"Timeout"},{"id":"73","location":{"end":{"column":39,"line":38},"start":{"column":37,"line":38}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Timeout"},{"id":"76","location":{"end":{"column":56,"line":39},"start":{"column":3,"line":39}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"82","location":{"end":{"column":53,"line":40},"start":{"column":3,"line":40}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"75","location":{"end":{"column":53,"line":38},"start":{"column":19,"line":38}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"70","location":{"end":{"column":4,"line":35},"start":{"column":25,"line":33}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"78","location":{"end":{"column":41,"line":39},"start":{"column":39,"line":39}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Timeout"},{"id":"69","location":{"end":{"column":23,"line":33},"start":{"column":21,"line":33}},"mutatorName":"PrefixUnaryExpression","replacement":"+1","status":"Timeout"},{"id":"71","location":{"end":{"column":53,"line":38},"start":{"column":3,"line":38}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"80","location":{"end":{"column":56,"line":39},"start":{"column":20,"line":39}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"77","location":{"end":{"column":56,"line":39},"start":{"column":3,"line":39}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"72","location":{"end":{"column":53,"line":38},"start":{"column":3,"line":38}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"74","location":{"end":{"column":53,"line":38},"start":{"column":19,"line":38}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"89","location":{"end":{"column":44,"line":41},"start":{"column":16,"line":41}},"mutatorName":"ConditionalExpression","replacement":"false","status":"RuntimeError"},{"id":"104","location":{"end":{"column":59,"line":44},"start":{"column":21,"line":44}},"mutatorName":"ConditionalExpression","replacement":"false","status":"RuntimeError"},{"id":"105","location":{"end":{"column":59,"line":44},"start":{"column":21,"line":44}},"mutatorName":"ConditionalExpression","replacement":"true","status":"RuntimeError"},{"id":"86","location":{"end":{"column":44,"line":41},"start":{"column":3,"line":41}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"106","location":{"end":{"column":26,"line":46},"start":{"column":3,"line":46}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Survived"},{"id":"96","location":{"end":{"column":44,"line":43},"start":{"column":3,"line":43}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"97","location":{"end":{"column":44,"line":43},"start":{"column":3,"line":43}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"99","location":{"end":{"column":44,"line":43},"start":{"column":16,"line":43}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"94","location":{"end":{"column":53,"line":42},"start":{"column":19,"line":42}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"103","location":{"end":{"column":43,"line":44},"start":{"column":41,"line":44}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Timeout"},{"id":"98","location":{"end":{"column":33,"line":43},"start":{"column":31,"line":43}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Timeout"},{"id":"90","location":{"end":{"column":44,"line":41},"start":{"column":16,"line":41}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"95","location":{"end":{"column":53,"line":42},"start":{"column":19,"line":42}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"92","location":{"end":{"column":53,"line":42},"start":{"column":3,"line":42}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"102","location":{"end":{"column":59,"line":44},"start":{"column":3,"line":44}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"101","location":{"end":{"column":59,"line":44},"start":{"column":3,"line":44}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"93","location":{"end":{"column":39,"line":42},"start":{"column":37,"line":42}},"mutatorName":"BinaryExpression","replacement":"&&","status":"Timeout"},{"id":"100","location":{"end":{"column":44,"line":43},"start":{"column":16,"line":43}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"91","location":{"end":{"column":53,"line":42},"start":{"column":3,"line":42}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"108","location":{"end":{"column":2,"line":61},"start":{"column":78,"line":50}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"107","location":{"end":{"column":26,"line":46},"start":{"column":3,"line":46}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"109","location":{"end":{"column":71,"line":52},"start":{"column":37,"line":52}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Timeout"},{"id":"120","location":{"end":{"column":58,"line":58},"start":{"column":24,"line":58}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Timeout"},{"id":"119","location":{"end":{"column":59,"line":58},"start":{"column":3,"line":58}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"112","location":{"end":{"column":71,"line":52},"start":{"column":45,"line":52}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"121","location":{"end":{"column":49,"line":58},"start":{"column":46,"line":58}},"mutatorName":"BinaryExpression","replacement":"===","status":"Timeout"},{"id":"111","location":{"end":{"column":71,"line":52},"start":{"column":45,"line":52}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"122","location":{"end":{"column":58,"line":58},"start":{"column":32,"line":58}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"114","location":{"end":{"column":23,"line":54},"start":{"column":7,"line":54}},"mutatorName":"IfStatement","replacement":"false","status":"Timeout"},{"id":"118","location":{"end":{"column":59,"line":58},"start":{"column":3,"line":58}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"123","location":{"end":{"column":58,"line":58},"start":{"column":32,"line":58}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"110","location":{"end":{"column":62,"line":52},"start":{"column":59,"line":52}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Timeout"},{"id":"115","location":{"end":{"column":20,"line":54},"start":{"column":17,"line":54}},"mutatorName":"BinaryExpression","replacement":"!==","status":"Timeout"},{"id":"113","location":{"end":{"column":23,"line":54},"start":{"column":7,"line":54}},"mutatorName":"IfStatement","replacement":"true","status":"Timeout"},{"id":"116","location":{"end":{"column":23,"line":54},"start":{"column":21,"line":54}},"mutatorName":"PrefixUnaryExpression","replacement":"+1","status":"Timeout"},{"id":"117","location":{"end":{"column":4,"line":56},"start":{"column":25,"line":54}},"mutatorName":"Block","replacement":"{}","status":"Timeout"}],"source":"import { NextFunction, Request, Response } from 'express'\nimport { default as User } from '../model/user'\n\nlet users: Array<User> = []\n\nexport let getUser = (req: Request, res: Response, next: NextFunction) => {\n    const username = req.params.username\n    const user = users.find(obj => obj.username === username)\n    const httpStatusCode = user ? 200 : 404\n    return res.status(httpStatusCode).send(user)\n}\n\nexport let addUser = (req: Request, res: Response, next: NextFunction) => {\n    const user: User = {\n        // generic random value from 1 to 100 only for test so far\n        id: Math.floor(Math.random() * 100) + 1,\n        username: req.body.username,\n        firstName: req.body.firstName,\n        lastName: req.body.lastName,\n        email: req.body.email,\n        password: req.body.password,\n        phone: req.body.phone,\n        userStatus: 1\n    }\n    users.push(user)\n    return res.status(201).send(user)\n}\n\nexport let updateUser = (req: Request, res: Response, next: NextFunction) => {\n  const username = req.params.username\n  const userIndex = users.findIndex(item => item.username === username)\n\n  if (userIndex === -1) {\n    return res.status(404).send()\n  }\n\n  const user = users[userIndex]\n  user.username = req.body.username || user.username\n  user.firstName = req.body.firstName || user.firstName\n  user.lastName = req.body.lastName || user.lastName\n  user.email = req.body.email || user.email\n  user.password = req.body.password || user.password\n  user.phone = req.body.phone || user.phone\n  user.userStatus = req.body.userStatus || user.userStatus\n\n  users[userIndex] = user\n  return res.status(204).send()\n}\n\nexport let removeUser = (req: Request, res: Response, next: NextFunction) => {\n  const username = req.params.username\n  const userIndex = users.findIndex(item => item.username === username)\n\n  if (userIndex === -1) {\n    return res.status(404).send()\n  }\n\n  users = users.filter(item => item.username !== username)\n\n  return res.status(204).send()\n}\n"},"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/model/orderStatus.ts":{"language":"typescript","mutants":[{"id":"125","location":{"end":{"column":26,"line":5},"start":{"column":16,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"124","location":{"end":{"column":22,"line":4},"start":{"column":14,"line":4}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"126","location":{"end":{"column":28,"line":6},"start":{"column":17,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"}],"source":"'use strict'\n\nexport enum OrderStatus {\n    Placed = 'PLACED',\n    Approved = 'APPROVED',\n    Delivered = 'DELIVERED'\n}"},"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/routes/index.ts":{"language":"typescript","mutants":[{"id":"130","location":{"end":{"column":27,"line":5},"start":{"column":19,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"132","location":{"end":{"column":54,"line":6},"start":{"column":34,"line":6}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Timeout"},{"id":"129","location":{"end":{"column":6,"line":8},"start":{"column":29,"line":4}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"133","location":{"end":{"column":53,"line":6},"start":{"column":44,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"131","location":{"end":{"column":10,"line":7},"start":{"column":66,"line":5}},"mutatorName":"Block","replacement":"{}","status":"Timeout"}],"source":"import { Request, Response } from 'express'\n\nexport class Index {\n    public routes(app):void {\n        app.route('/index').get((req: Request, res: Response) => {\n            res.status(200).send({ status: 'success'})\n        })\n    }\n}"},"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/routes/order.ts":{"language":"typescript","mutants":[{"id":"138","location":{"end":{"column":38,"line":8},"start":{"column":19,"line":8}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"137","location":{"end":{"column":38,"line":7},"start":{"column":19,"line":7}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"134","location":{"end":{"column":6,"line":9},"start":{"column":30,"line":4}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"135","location":{"end":{"column":37,"line":5},"start":{"column":19,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"136","location":{"end":{"column":34,"line":6},"start":{"column":19,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"}],"source":"import * as orderController from '../controllers/order'\n\nexport class OrderRoute {\n    public routes(app): void {\n        app.route('/store/inventory').get(orderController.getInventory)\n        app.route('/store/orders').post(orderController.addOrder)\n        app.route('/store/orders/:id').get(orderController.getOrder)\n        app.route('/store/orders/:id').delete(orderController.removeOrder)\n    }\n}"},"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/routes/api.ts":{"language":"typescript","mutants":[{"id":"128","location":{"end":{"column":25,"line":5},"start":{"column":19,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"127","location":{"end":{"column":6,"line":6},"start":{"column":30,"line":4}},"mutatorName":"Block","replacement":"{}","status":"Timeout"}],"source":"import * as apiController from '../controllers/api'\n\nexport class APIRoute {\n    public routes(app): void {\n        app.route('/api').get(apiController.getApi)\n    }\n}"},"/workspace/restfulWebServicesWithTypescript/Chapter06/order-api/src/routes/user.ts":{"language":"typescript","mutants":[{"id":"139","location":{"end":{"column":6,"line":9},"start":{"column":30,"line":4}},"mutatorName":"Block","replacement":"{}","status":"Timeout"},{"id":"141","location":{"end":{"column":37,"line":6},"start":{"column":19,"line":6}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"140","location":{"end":{"column":27,"line":5},"start":{"column":19,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"143","location":{"end":{"column":37,"line":8},"start":{"column":19,"line":8}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"142","location":{"end":{"column":37,"line":7},"start":{"column":19,"line":7}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"}],"source":"import * as userController from '../controllers/user'\n\nexport class UserRoute {\n    public routes(app): void {\n        app.route('/users').post(userController.addUser)\n        app.route('/users/:username').patch(userController.updateUser)\n        app.route('/users/:username').delete(userController.removeUser)\n        app.route('/users/:username').get(userController.getUser)\n    }\n}"}},"schemaVersion":"1.0","thresholds":{"break":null,"high":80,"low":60}};