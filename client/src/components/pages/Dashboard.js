import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Container, Row, Col } from 'react-bootstrap';
<<<<<<< HEAD
=======
import '../widgets/Calendar.css'
>>>>>>> ea87b76639e6883efa624e2231c7c78cdf48e469
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
<<<<<<< HEAD
          <iframe
            className="calendarstyle"
            src="https://calendar.google.com/calendar/embed?src=i3cdofnqk0s122tmc9mbgnhj3c%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          ></iframe>
=======
        <iframe className='calendarstyle' src="https://calendar.google.com/calendar/embed?src=i3cdofnqk0s122tmc9mbgnhj3c%40group.calendar.google.com&ctz=America%2FLos_Angeles"></iframe>
>>>>>>> ea87b76639e6883efa624e2231c7c78cdf48e469
        </Col>
        <Col>
          <Notes />
        </Col>
      </Row>
    </Container>
  );
}
