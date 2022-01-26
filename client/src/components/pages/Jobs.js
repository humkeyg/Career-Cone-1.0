import React from "react";

import { Form, Button, Box, Block, Notification} from "react-bulma-components";
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

      <Box>
  <React.Fragment key=".0">
    <Block>
      <Notification color="info">
    <Button className= "save" color="">
      Save
    </Button>
        Some text
      </Notification>
    </Block>
    <Block>
      <Notification color="success">
      <Button className= "save" color="">
      Save
    </Button>
        Some more text
      </Notification>
    </Block>
    <Block>
      <Notification color="danger">
      <Button className= "save" color="">
      Save
    </Button>
        All of this are evently spaced
      </Notification>
    </Block>
    <Block>
      <Notification color="warning">
      <Button className= "save" color="">
      Save
    </Button>
        This one does not generate extra margin at the bottom
      </Notification>
    </Block>
  </React.Fragment>
</Box>

<hr />


    </Container>



  );
}
