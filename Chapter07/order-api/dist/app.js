"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const api_1 = require("../src/routes/api");
const order_1 = require("../src/routes/order");
const user_1 = require("../src/routes/user");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.indexRoutes = new routes_1.Index();
        this.userRoutes = new user_1.UserRoute();
        this.apiRoutes = new api_1.APIRoute();
        this.orderRoutes = new order_1.OrderRoute();
        this.app = express();
        this.app.use(bodyParser.json());
        this.indexRoutes.routes(this.app);
        this.userRoutes.routes(this.app);
        this.apiRoutes.routes(this.app);
        this.orderRoutes.routes(this.app);
    }
}
exports.default = new App().app;
