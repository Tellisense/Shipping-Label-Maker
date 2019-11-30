import React from "react";
import { Container, Form, Col } from 'react-bootstrap';
import '../../../App.css'

const Weight = ({ onAction, weight }) => {
    return (
      <Container>
        <h4 className='weight-mb-small' >Weight:</h4>
        <Form className="weight-mb-large">
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control placeholder="Enter weight (lbs)"
                id="weight"
                type="text"
                onChange={onAction}
                value={weight} />
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    );
  }

export default Weight;
