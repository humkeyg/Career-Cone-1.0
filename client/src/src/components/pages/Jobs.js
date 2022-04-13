import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button, Card } from 'react-bulma-components';
import { Container, Row, Col } from 'react-bootstrap';
//will need to import data from API USA JOBS

export default function Jobs() {
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

          <Card>
            <Card.Header>
              <h1>API JOB TITLE</h1>
            </Card.Header>

            <Card.Content>
              <h1>Test</h1>
            </Card.Content>
          </Card>

        </Col>

      </Row>
    </Container>
  )
}