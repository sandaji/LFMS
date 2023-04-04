import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "WEBSOCKET_SEND", payload: { message } });
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleInputChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
