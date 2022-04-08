const fetch = require("node-fetch");
const COINDESK_URL = process.env.COINDESK_URL;

class Btcprice{

    /**
     * Invokes the API
     * @returns the response from the Bitcoin price API
     */  
    async find(){
      try {
        const data =  await fetch(COINDESK_URL);
        const resp = await data.json();    
        return this.createJson(resp);
      } catch (error) {
        throw error;
      }  
    }
    
    /**
     * Private function
     * @param {json} resp 
     * @returns the json message with the most important fields
     */
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