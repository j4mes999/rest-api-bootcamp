const express = require("express");
const routerApi = require("./routes");
const errorHandler = require("./middlewares/error.handler");

const app = express();
const port = 3000;

app.use(express.json());
routerApi(app);
app.use(errorHandler);

app.listen(port, () => {
    console.log("App running in port -> "+port);
})