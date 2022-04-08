const express = require("express");
const { nextTick } = require("process");
const Btcprice = require("../services/btcprice.service");

const router = express.Router();
const service = new Btcprice();

router.get("/", async (req, res, next) => {

    try {
        const resp = await service.find();
        res.json(resp);    
    } catch (error) {
      next(error); 
    }
    
})

module.exports = router;