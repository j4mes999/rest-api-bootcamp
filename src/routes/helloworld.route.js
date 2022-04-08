const express = require("express");
const HelloWorld = require("../services/helloworld.service");

const router = express.Router();
const service = new HelloWorld();

/**
 * Method GET
 */
router.get("/", async(req, res) => {
  const helloWorld = await service.find();
  res.status(200).json({"message": helloWorld});
});

module.exports = router;