import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "../actions/messageAction";
import { MESSAGE_CREATE_RESET } from "../constants/messageConstant";
import { Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPen } from "react-icons/fa";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

const messageCreate = useSelector((state) => state.messageCreate);
const success = messageCreate?.success || false;


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createMessage({ subject, message, userId: userInfo._id }));
  };

  const resetHandler = () => {
    setSubject("");
    setMessage("");
    dispatch({ type: MESSAGE_CREATE_RESET });
  };

  const handleToast = (type, message) => {
    toast[type](message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (success) {
    resetHandler();
    handleToast("success", "Message sent successfully!");
  }

  return (
    <Form onSubmit={submitHandler} onReset={resetHandler}>
      <h2 className="mb-3 text-center">Send Message</h2>
      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <div className="input-group">
          <span className="input-group-text">
            <FaPen />
          </span>
          <Form.Control
            type="text"
            placeholder="Enter message subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <div className="input-group">
          <span className="input-group-text">
            <FaEnvelope />
          </span>
          <Form.Control
            as="textarea"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
      </Form.Group>

      <Button variant="primary" type="submit" className="me-2">
        Send
      </Button>
      <Button variant="secondary" type="reset">
        Reset
      </Button>
    </Form>
  );
};

export default MessageForm;
