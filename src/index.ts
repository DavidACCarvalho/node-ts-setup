import http, { IncomingMessage } from 'http';

const handler = (request: IncomingMessage, response: http.ServerResponse) => {
    response.end('Hello World!');
};

http.createServer(handler).listen(3000, () => console.log('Server runing on port 3000'));
