import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button } from 'react-bulma-components';
import { Container, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
  return (
    <Container> <header className='header'>Search</header>

      <Row>

        <Col>
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
        </Col>



      </Row>
      
    </Container>
  )
}
