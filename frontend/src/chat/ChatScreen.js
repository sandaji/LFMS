import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, InputGroup, Button } from "react-bootstrap";
import { BiSend } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { toast } from "react-toastify";

const Chat = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [sendMessage, setSendMessage] = useState();
  const messages = useSelector((state) => state.chat.messages);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (message) {
      dispatch(sendMessage(message));
      setMessage("");
    } else {
      toast.error("Message cannot be empty");
    }
  };

  return (
    <>
      <div className="chat-icon" onClick={() => setShowChat(!showChat)}>
        <FaCommentDots />
      </div>
      {showChat && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-title">Chat with admin</div>
            <div
              className="chat-header-close"
              onClick={() => setShowChat(false)}
            >
              <MdClose />
            </div>
          </div>
          <div className="chat-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.from === "admin" ? "admin" : "user"
                }`}
              >
                <div className="chat-message-content">{message.content}</div>
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <Form onSubmit={handleSendMessage}>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <InputGroup.Append>
                  <Button type="submit">
                    <BiSend />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
