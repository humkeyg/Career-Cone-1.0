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
          <Card.Content>
            <Card.Header>
              Search
            </Card.Header>
            <Form.Field>
              <Form.Control>
                <Form.Input placeholder='Position title'/>
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Form.Input placeholder='Zip Code'/>
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Button color="link">Search</Button>
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Form.Input placeholder='Company Name'/>
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Button color="link">Search</Button>
              </Form.Control>
            </Form.Field>
          </Card.Content>
        </Col>

        <Col>
        
        </Col>

        <Col>
          <Calendar/>
        </Col>

      </Row>

    </Container>

  )
}