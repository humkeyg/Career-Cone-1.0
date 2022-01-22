<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Notes from '../widgets/Notes';
import '../widgets/Calendar.css'
=======
=======
>>>>>>> 7dba671a7b4a4a4805ee23245cde87550e1f0436
import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import Notes from "../widgets/Notes.js";
import { Form, Button, Block, Card } from "react-bulma-components";
import { Container, Row, Col } from "react-bootstrap";
import "../widgets/Calendar.css";
<<<<<<< HEAD
>>>>>>> 7dba671a7b4a4a4805ee23245cde87550e1f0436
=======
>>>>>>> 7dba671a7b4a4a4805ee23245cde87550e1f0436

export default function Dashboard() {
  return (
    <Container>
      <Row>
<<<<<<< HEAD
<<<<<<< HEAD

        <Col>
          <iframe className='calendarstyle' src="https://calendar.google.com/calendar/embed?src=i3cdofnqk0s122tmc9mbgnhj3c%40group.calendar.google.com&ctz=America%2FLos_Angeles"></iframe>
        </Col>
        
=======
>>>>>>> 7dba671a7b4a4a4805ee23245cde87550e1f0436
=======
>>>>>>> 7dba671a7b4a4a4805ee23245cde87550e1f0436
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
