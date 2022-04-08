const express = require("express");
const routerApi = require("./src/routes");
const errorHandler = require("./src/middlewares/error.handler");

const app = express();
const port = process.env.PORT;
 
app.use(express.json());
routerApi(app);
app.use(errorHandler);

app.listen(port, () => {
    console.log("App running in port -> "+port);
})