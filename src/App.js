import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { NavbarComponent } from './shell/NavbarComponent';
import Wizard from './core/components/wizard/Wizard';
import PrintPage from './features/shipping-label-maker/progress/PrintPage';
import steps from './features/shipping-label-maker/progress/StepIndex';
import './App.css';

const App = ({ finalLabel }) => {
  const [finishedLabel, setFinishedLabel] = useState(false);

  const createFinalLabel = finalLabel => {
    setFinishedLabel(true, finalLabel);
  };

  const labelFormat = {
    from: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    to: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    weight: '',
    shippingOption: 1
  };
  return (
    <Container>
      <Card className='App-BoxShadow'>
        <NavbarComponent />
        <Container>
          {finishedLabel ? (
            <PrintPage finalLabel={finalLabel} />
          ) : (
            <Wizard
              wizardContext={labelFormat}
              steps={steps}
              onComplete={createFinalLabel}
            />
          )}
        </Container>
      </Card>
    </Container>
  );
};

export default App;
