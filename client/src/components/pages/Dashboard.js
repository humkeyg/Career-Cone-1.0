import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Notes from '../widgets/Notes';
import '../widgets/Calendar.css'

export default function Dashboard() {
  return (
    <Container>
      <Row>

        <Col>
          <iframe className='calendarstyle' src="https://calendar.google.com/calendar/embed?src=i3cdofnqk0s122tmc9mbgnhj3c%40group.calendar.google.com&ctz=America%2FLos_Angeles"></iframe>
        </Col>
        
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
