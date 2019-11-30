import React, { Component } from "react";
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import '../../../App.css'


export default class PrintPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: this.props.wizardContext,
      shippingOption: " ",
      shippingTotal: 0
    };
  }

  componentDidMount() {
    this.getShippingOption();
    this.getShippingCost();
  }

  getShippingOption = () => {
    const option =
      this.state.wizardContext.shippingOption === "1" ? "Ground" : "Express";

    this.setState({ shippingOption: option });
  };

  getShippingCost = () => {
    const { wizardContext } = this.state;
    const weight = wizardContext.weight;
    const shippingOption = wizardContext.shippingOption;

    const shippingRate = 0.4,
      shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

    const shippingTotal = shippingCost.toFixed(2);
    this.setState({ shippingTotal });
  };


  render() {
    const { wizardContext } = this.state;
    return (
      <Container>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '15rem' }}>
                <Card.Body>
                  <Card.Title>From:</Card.Title>
                  <Card.Text>
                    {wizardContext.from.name}<br />
                    {wizardContext.from.street}<br />
                    {wizardContext.from.city}{', '}{wizardContext.from.state}{', '}{wizardContext.from.zip}
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
              <Card style={{ width: '15rem' }}>
                <Card.Body>
                  <Card.Title>To:</Card.Title>
                  <Card.Text>
                    {wizardContext.to.name}<br />
                    {wizardContext.to.street}<br />
                    {wizardContext.to.city}{', '}{wizardContext.to.state}{' '}{wizardContext.to.zip}
                  </Card.Text>
                </Card.Body>
              </Card></Col>
            <Col>
              <Card style={{ width: '13rem' }}>
                <Card.Body>Weight: {wizardContext.weight} lbs</Card.Body>
                <Card.Body>Shipping: {this.state.shippingOption}</Card.Body>
                <Card.Body style={{ fontWeight: "bold" }}>
                  Shipping Total: ${this.state.shippingTotal}
                </Card.Body>
                <Card.Body>
                  <img src="https://svgsilh.com/svg/312609.svg" alt="mail stamp" height="72" width="90" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Button variant="warning" id="printPageButton" onClick={() => window.print()}>Print Label</Button>
      </Container>
    );
  }
}
