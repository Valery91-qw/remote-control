export function onConnect(wsClient) {
    wsClient.send("Hello");
    wsClient.on("message", (msg) => {
        try {
            // сообщение пришло текстом, нужно конвертировать в JSON-формат
            console.log(msg);
            switch (msg) {
                case 'mouse_up':
                    wsClient.send(msg.data);
                    break;
                case 'PING':
                    setTimeout(function() {
                        wsClient.send('PONG');
                    }, 2000);
                    break;
                default:
                    console.log('Неизвестная команда');
                    break;
            }
        } catch (error) {
            console.log('Ошибка', error);
        }
    })

    wsClient.on("mousemove", (data) => {
        console.log(data)
        wsClient.broadcast.emit("moving", data)
    })
    wsClient.on("close", () => {
        console.log("disconnect")
    })
}