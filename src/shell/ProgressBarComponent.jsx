import React from "react";
import { ProgressBar } from 'react-bootstrap';

const ProgressBarComponent = ({currentStep: progress}) => {

  const whichColor = (progress) => {
    if(progress === 1 ) {
      return "danger"
    } 
    if(progress === 2 ) {
      return "warning"
    } 
    if(progress === 3 || progress === 4){
       return "info"
    }
   if(progress === 5){
    return "success"
 }
  }
    return (
      <div className='ml-5 mr-5 mt-4 mb-5'>
        <ProgressBar
         striped
          variant={whichColor(progress)}
          now={progress * 20}
        />
      </div>
    );
  }

export default ProgressBarComponent;
