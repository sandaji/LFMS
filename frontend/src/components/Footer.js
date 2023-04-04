import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ChatBox from './ChatBox'

const Footer = () => {
  return (
    <footer className="mb-0">
      <Container>
        <Row className="d-flex align-items-center ">
          <Col md={4} className="mt-3">
            <Link to="/bookrequest">
              <Button className="text-center">Book Request</Button>
            </Link>
          </Col>
          <Col md={4} className="text-center ">
            ijamy vincent&copy;2023
          </Col>
          <Col md={4} className="mt-3">
            <Link to="/messages">
              <Button className="text-center ">Send message</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
