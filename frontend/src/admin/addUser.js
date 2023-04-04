import { useState } from "react";
import Axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(123456);

  const addUser = () => {
    Axios.post("/add-product", {
      name,
      email,
      password,
    });
  };

  return (
    <Container>
      <Form className="mx-auto">
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="">Name: </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="">Email: </Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="">Password: </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button onClick={addUser}>Add</Button>
      </Form>
    </Container>
  );
};

export default AddUser;
