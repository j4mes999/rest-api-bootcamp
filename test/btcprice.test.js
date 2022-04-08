const { test, expect } = require("@jest/globals");
const btcService = require("./../src/services/btcprice.service");

const service = new btcService();
describe("btcService",() => {
    test("Communication with the backend is successful", async () => {
      const res = await service.find();
      expect(res.EUR).not.toBe(undefined);    
    });
});