import React from "react";

import {
  Box,
  Button,
  Field,
  Control,
  Textarea,
  Container,
  Notification,
} from "react-bulma-components";
import "../../App";

export default function Notes() {
  return (
    <div className="Notes">
      <h2 className="section-title">Notes:</h2>

      <textarea
        className="textarea is-primary"
        placeholder="Save your notes here!"
      ></textarea>

      <br />

      <Button color="primary">Save!</Button>

      <hr />

      <Container>
        <Notification color="primary">saved notes will go here</Notification>
      </Container>

      <br />
    </div>
  );
}
