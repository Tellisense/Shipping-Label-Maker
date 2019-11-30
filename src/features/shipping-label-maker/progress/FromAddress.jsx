import React from 'react';
import { Container, Form, Col } from 'react-bootstrap';


const FromAddress = ({ wizardContext: senderDetails, onAction }) => {
  return (
    <Container>
      <h4>From:</h4>
      <Form.Group className='mt-4'>
        <Form>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder='Susy Q'
              id='from'
              field='name'
              type='text'
              onChange={onAction}
              value={senderDetails.name}
            />
          </Form.Group>

          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder='555 5th Ave'
              id='from'
              field='street'
              type='text'
              onChange={onAction}
              value={senderDetails.street}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder='New York'
                id='from'
                field='city'
                type='text'
                onChange={onAction}
                value={senderDetails.city}
              />
            </Form.Group>
            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder='New York'
                id='from'
                field='state'
                type='text'
                onChange={onAction}
                value={senderDetails.state}
                as='select'>
                <option value='AL'>Alabama</option>
                <option value='AK'>Alaska</option>
                <option value='AZ'>Arizona</option>
                <option value='AR'>Arkansas</option>
                <option value='CA'>California</option>
                <option value='CO'>Colorado</option>
                <option value='CT'>Connecticut</option>
                <option value='DE'>Delaware</option>
                <option value='DC'>District Of Columbia</option>
                <option value='FL'>Florida</option>
                <option value='GA'>Georgia</option>
                <option value='HI'>Hawaii</option>
                <option value='ID'>Idaho</option>
                <option value='IL'>Illinois</option>
                <option value='IN'>Indiana</option>
                <option value='IA'>Iowa</option>
                <option value='KS'>Kansas</option>
                <option value='KY'>Kentucky</option>
                <option value='LA'>Louisiana</option>
                <option value='ME'>Maine</option>
                <option value='MD'>Maryland</option>
                <option value='MA'>Massachusetts</option>
                <option value='MI'>Michigan</option>
                <option value='MN'>Minnesota</option>
                <option value='MS'>Mississippi</option>
                <option value='MO'>Missouri</option>
                <option value='MT'>Montana</option>
                <option value='NE'>Nebraska</option>
                <option value='NV'>Nevada</option>
                <option value='NH'>New Hampshire</option>
                <option value='NJ'>New Jersey</option>
                <option value='NM'>New Mexico</option>
                <option value='NY'>New York</option>
                <option value='NC'>North Carolina</option>
                <option value='ND'>North Dakota</option>
                <option value='OH'>Ohio</option>
                <option value='OK'>Oklahoma</option>
                <option value='OR'>Oregon</option>
                <option value='PA'>Pennsylvania</option>
                <option value='RI'>Rhode Island</option>
                <option value='SC'>South Carolina</option>
                <option value='SD'>South Dakota</option>
                <option value='TN'>Tennessee</option>
                <option value='TX'>Texas</option>
                <option value='UT'>Utah</option>
                <option value='VT'>Vermont</option>
                <option value='VA'>Virginia</option>
                <option value='WA'>Washington</option>
                <option value='WV'>West Virginia</option>
                <option value='WI'>Wisconsin</option>
                <option value='WY'>Wyoming</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control
                placeholder='Zip Code'
                id='from'
                field='zip'
                type='text'
                onChange={onAction}
                value={senderDetails.zip}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </Form.Group>
    </Container>
  );
}

export default FromAddress;
