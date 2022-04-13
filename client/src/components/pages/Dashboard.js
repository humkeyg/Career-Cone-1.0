import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../widgets/Calendar.css";
import Notes from "../widgets/Notes";

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <iframe
            className="calendarstyle"
            src="https://calendar.google.com/calendar/embed?src=i3cdofnqk0s122tmc9mbgnhj3c%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          ></iframe>
        </Col>
        
        <Col>
          <Notes />
        </Col>
      </Row>
    </Container>
  );
}
