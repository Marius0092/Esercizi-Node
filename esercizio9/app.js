const {createServer} = require('node:http');

function createApp(){
    return createServer((request, response) => {

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(`<html><body><h1>Welcome to the World Wide Web!</html></body></h1>`);

    })
}

module.exports = createApp;
