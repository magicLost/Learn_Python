const WebSocketServer = new require("ws");

const clients = [];

const webSocketServer = new WebSocketServer.Server({port: 8080});

webSocketServer.on("connection", (ws) => {

    const id = Math.random();

    console.log(`New connection ${id}`);

    ws.on("message", (message) => {
        console.log(`Message received from ${id} - ${message}`);

    });

    ws.on("close", () => {
        console.log(`Connection close by ${id}`);
    });

});
