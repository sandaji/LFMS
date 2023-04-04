import React from 'react'
import Message from './Message'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Success = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Message>Success!</Message>
          <p>Your book has been reserved successfully.</p>
          <p>Thank you for using our library.</p>
          <Button as={Link} to="/">Go to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Success;
