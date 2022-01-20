import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import Notes from '../widgets/Notes.js';
import { Form, Button, Block, Card } from 'react-bulma-components';
import { Container, Row, Col } from 'react-bootstrap';
<<<<<<< HEAD
import Notes from '../widgets/Notes';
=======
import '../widgets/Calendar.css'
>>>>>>> 6e07032bfc972ff8e547dd095f5005d15e5f17eb

export default function Dashboard() {
  return (
    <Container>

      <Row>

        <Col>
        <iframe className='calendarstyle' src="https://calendar.google.com/calendar/embed?src=i3cdofnqk0s122tmc9mbgnhj3c%40group.calendar.google.com&ctz=America%2FLos_Angeles"></iframe>
        </Col>
        
        <Col>
          <Notes/>
        </Col>

      </Row>

    </Container>

  )
}