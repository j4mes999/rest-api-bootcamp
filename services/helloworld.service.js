class HelloWorld{
    constructor(){
        this.message = "Hello world!";
    }

    async find(){
        return this.message;
    }
}

module.exports = HelloWorld;