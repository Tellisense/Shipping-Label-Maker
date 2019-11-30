import React from "react";
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({previousStep, currentStep, nextStep}) => (
  <Container className='ml-5 mr-5 mt-4 mb-5'>
     {currentStep < 2 ? null : (
       
        <Button variant="warning" icon labelPosition="left" onClick={previousStep}>
            <FontAwesomeIcon style={{ color: "#000" }} icon={faArrowLeft} />{' '}
          Back
        </Button>
      )}
      <Button className="ml-3" variant="warning"icon labelPosition="right" onClick={nextStep}>
        Next
        {' '}<FontAwesomeIcon style={{ color: "#000" }} icon={faArrowRight} />
      </Button>  
  </Container>
);

export default Navigation;
