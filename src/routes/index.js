const express = require("express");
const helloWorldRouter = require("./helloworld.route");
const Btcprice = require("./btcprice.route");

/**
 * Router master
 * @param {theApp} app 
 */
function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/helloWorld", helloWorldRouter);
    router.use("/btcPrice", Btcprice);
}

module.exports = routerApi;