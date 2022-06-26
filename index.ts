import {httpServer} from './src/http_server';
import { WebSocketServer } from 'ws';
import {onConnect} from "./src/ws_server";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wsServer = new WebSocketServer({port: 8081});

wsServer.on("connection", onConnect);
