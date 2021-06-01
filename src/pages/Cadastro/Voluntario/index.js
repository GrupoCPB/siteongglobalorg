import React from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";

import { Form, Button , Container, Row, Col} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function CadastroVoluntario() {
  return (
    <>
     <Container>
      <div className="row justify-content-center">
        <h1>Nova Conta</h1>
        <p>Crie uma nova conta para se voluntariar.</p>
      </div>

      <Form>
        <Row>
        <Col xs={6} md={4} lg={6}>
        <Form.Group controlId="formBasicEmail"  >

          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        </Col>
        </Row>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
      </Container>
    </>
  );
}
