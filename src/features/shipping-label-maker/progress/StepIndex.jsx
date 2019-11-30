import React from "react";
import PropTypes from "prop-types";
import FromAddress from "./FromAddress";
import ToAddress from "./ToAddress";
import GetWeight from "./Weight";
import Shipping from "./Shipping";
import Confirm from "./PrintPage";

const steps = [
  <FromAddress wizardContext={"from"} onAction={"handleNameAndAddress"} />,
  <ToAddress wizardContext={"to"} onAction={"handleNameAndAddress"} />,
  <GetWeight wizardContext={"weight"} onAction={"handleRootState"} />,
  <Shipping
    wizardContext={"shippingOption"}
    onAction={"handleRootState"}
  />,
  <Confirm wizardContext={"wizardContext"} onAction={"labelSubmit"} />
];

steps.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default steps;
