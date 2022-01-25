import React from "react";

import { Form, Button } from "react-bulma-components";
import { Container } from "react-bootstrap";
import "./Jobs.css";

export default function Jobs() {
  return (
    <Container>
      {" "}
      <header className="header">Search</header>
      <Form.Field>
        <Form.Control>
          <Form.Input placeholder="Position title" />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control>
          <Form.Input placeholder="Zip Code" />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control>
          <Button color="primary">Search</Button>
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control>
          <Form.Input placeholder="Company Name" />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Control>
          <Button className="srchBtn" color="primary">Search</Button>
        </Form.Control>
      </Form.Field>
    </Container>
  );
}
