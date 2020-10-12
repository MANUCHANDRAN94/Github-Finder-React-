import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && <div className={`alert alert-${alert.buttonClass}`}></div>
  );
};

export default Alert;
