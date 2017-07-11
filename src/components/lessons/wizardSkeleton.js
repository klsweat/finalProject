import React from "react";

// Our Container component's only purpose will be to hold and center the rest of our content
// props.children will be substituted for any nested components deployed
const WizardSkeleton = props =>
  <div className="stepwizard">
    <div className="stepwizard-row setup-panel d-flex">
        {props.children}

    </div>
  </div>
  
  ;

// Exporting this component as the default (only) export
export default WizardSkeleton;
