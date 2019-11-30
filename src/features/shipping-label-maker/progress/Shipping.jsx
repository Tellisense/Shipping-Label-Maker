import React from 'react';
import { Container, Form, Col } from 'react-bootstrap';
import '../../../App.css'

const Shipping = ({ onAction }) => {
  return (
      <Container>
        <h4 className='shipping-mb-small'>Shipping Options:</h4>
        <Form className='shipping-mb-large'>
          <Form.Group as={Col}>
            <Form.Check
              label='Ground'
              control='input'
              type='radio'
              name='htmlRadios'
              onChange={onAction}
              id='shippingOption'
              value='1'
            />
            <Form.Check
              label='Express'
              control='input'
              type='radio'
              name='htmlRadios'
              onChange={onAction}
              id='shippingOption'
              value='2'
            />
          </Form.Group>
        </Form>
      </Container>
  );
};

export default Shipping;
