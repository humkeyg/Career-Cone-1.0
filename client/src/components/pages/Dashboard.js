import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button, Block, Card } from 'react-bulma-components';
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from '../widgets/Calendar';

export default function Dashboard() {
  return (
    <Container>

      <Row>
        
        <Col>
          <Calendar/>
        </Col>

        <Col>
          <Notes/>
        </Col>

      </Row>

    </Container>

  )
}