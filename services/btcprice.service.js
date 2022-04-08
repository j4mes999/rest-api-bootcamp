const fetch = require("node-fetch");
const COINDESK_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

class Btcprice{

    async find(){
      try {
        const data =  await fetch(COINDESK_URL);
        const resp = await data.json();    
        return this.createJson(resp);
      } catch (error) {
        throw error;
      }  
    }

    createJson(resp){
      const result = {
        USD:{  
            code: resp.bpi.USD.code,
            rate: resp.bpi.USD.rate,
            description: resp.bpi.USD.description
        },
        EUR:{  
            code: resp.bpi.EUR.code,
            rate: resp.bpi.EUR.rate,
            description: resp.bpi.EUR.description
        },
        GBP:{  
            code: resp.bpi.GBP.code,
            rate: resp.bpi.GBP.rate,
            description: resp.bpi.GBP.description
        }
    }
    return result;

    }
}

module.exports = Btcprice;