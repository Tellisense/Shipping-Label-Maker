import React, { Component } from "react";
import PropTypes from "prop-types";

import ProgressBar from "../../../shell/ProgressBarComponent";
import Navigation from "../../../shell/NavigationButton";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: this.props.wizardContext,
      currentStep: 1
    };
  }

  handleRootState = (event) => {
    const id = event.target.getAttribute("id"),
      value = event.target.value;

    this.setState({
      wizardContext: { ...this.state.wizardContext, [id]: value }
    });
  }

  handleNameAndAddress = e => {
    const id = e.target.getAttribute("id"),
      field = e.target.getAttribute("field"),
      value = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      wizardContext: {
        ...prevState.wizardContext,
        [id]: {
          ...prevState.wizardContext[id],
          [field]: value
        }
      }
    }));
  }

  nextStep = () => {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep + 1
      };
    });
  }

  previousStep = () => {
    if (this.state.currentStep > 1) {
      this.setState({
        currentStep: this.state.currentStep - 1
      });
    }
  }

  labelSubmit = finalLabel => {
    this.props.onComplete(finalLabel);
  }

  render() {
    return (
      <div>
        <ProgressBar currentStep={this.state.currentStep} />
        {React.cloneElement(this.props.steps[this.state.currentStep - 1], {
          onAction: this[
            this.props.steps[this.state.currentStep - 1].props.onAction
          ],
          wizardContext: this.state.wizardContext
        })}
        {this.state.currentStep > 4 ? null : (
          <Navigation
            previousStep={this.previousStep}
            nextStep={this.nextStep}
            currentStep={this.state.currentStep}
          />
        )}
      </div>
    );
  }
}

Wizard.propTypes = {
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};
