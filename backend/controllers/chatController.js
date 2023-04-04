import io from "socket.io-client";

const socketMiddleware = (function () {
  let socket = null;

  const onOpen = (ws, store) => (event) => {
    store.dispatch({ type: "WEBSOCKET_OPEN" });
  };

  const onClose = (ws, store) => (event) => {
    store.dispatch({ type: "WEBSOCKET_CLOSE" });
  };

  const onMessage = (ws, store) => (event) => {
    const payload = JSON.parse(event.data);
    store.dispatch({ type: "WEBSOCKET_MESSAGE", payload });
  };

  return (store) => (next) => (action) => {
    switch (action.type) {
      case "WEBSOCKET_CONNECT":
        if (socket !== null) {
          socket.close();
        }

        socket = io("http://localhost:5000");

        socket.on("connect", onOpen(socket, store));
        socket.on("disconnect", onClose(socket, store));
        socket.on("message", onMessage(socket, store));

        break;

      case "WEBSOCKET_SEND":
        socket.send(JSON.stringify(action.payload));
        break;

      case "WEBSOCKET_CLOSE":
        socket.close();
        break;

      default:
        return next(action);
    }
  };
})();

export default socketMiddleware;
