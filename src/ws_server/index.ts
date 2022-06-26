import {parseMessage} from "./helpers/parseMessage";
import robot from 'robotjs';
import mouseInteraction from "./navigation/index"
import {screenshot} from "./screenshot/screenshot";

export function onConnect(wsClient: any) {
    wsClient.send("Hello");
    wsClient.on("message", (msg: Buffer) => {
        try {
            const {command, params} = parseMessage(msg)
            switch (command) {
                case 'mouse_up': {
                    const curPosition = robot.getMousePos()
                    mouseInteraction.mouseUp(params, curPosition, robot.moveMouse)
                    wsClient.send(`${command}\0`);
                }
                    break;
                case 'mouse_down': {
                    const curPosition = robot.getMousePos()
                    mouseInteraction.mouseDown(params, curPosition, robot.moveMouse)
                    wsClient.send(`${command}\0`);
                }
                    break;
                case 'mouse_left': {
                    const curPosition = robot.getMousePos()
                    mouseInteraction.mouseLeft(params, curPosition, robot.moveMouse)
                    wsClient.send(`${command}\0`);
                }
                    break;
                case 'mouse_right': {
                    const curPosition = robot.getMousePos()
                    mouseInteraction.mouseRight(params, curPosition, robot.moveMouse)
                    wsClient.send(`${command}\0`);
                }
                    break;
                case 'mouse_position': {
                    const curPosition = robot.getMousePos()
                    wsClient.send(`${command} ${curPosition.x},${curPosition.y}`);
                }
                    break;
                default:
                    wsClient.send(`${command} not working`);
                    break;
            }
        } catch (error) {
            console.log('Ошибка', error);
        }
    })
    wsClient.on("close", () => {
        console.log("disconnect")
    })
}