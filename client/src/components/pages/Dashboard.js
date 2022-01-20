import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import Notes from '../widgets/Notes.js';
import { Form, Button, Block, Card } from 'react-bulma-components';
import { Container, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
  return (
    <Container>

      <Row>
        
        <Col>
          <Notes/>
        </Col>

      </Row>

    </Container>

  )
}