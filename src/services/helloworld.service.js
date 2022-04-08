class HelloWorld{
    constructor(){
        this.message = "Hello world!";
    }

    /**
     * 
     * @returns Hello world message
     */
    async find(){
        return this.message;
    }
}

module.exports = HelloWorld;