import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonMailto from "../MailtoButton";
import TargetBlank from "../TargetBlank";

class About extends Component {
  render() {
    return (
      <div className="devcardgrid">
          <div className="webdev5">
          <h1>Project</h1>
          <p>The application will assist clients in calculating square footage measurements for vinyl installation material deliverables on behalf of the design company. 
            The average user will be able to utilize the calculator tool to place product orders, potentially have access to an augmented reality capability to visualize the placement, save their account info, and notify the administration team of their new orders.</p>
        </div>
        <div className="webdev5">
          <h1>Jon</h1>
          <hr></hr>
          <p><TargetBlank label="Github" target="_blank" openLink="https://github.com/Yeatman51"/></p>
          <p><TargetBlank label="LinkedIn" target="_blank" openLink="https://www.linkedin.com/in/jon-yeatman/"/></p>
          <p><ButtonMailto label="Email" mailto="mailto:jonlyeatman@gmail.com"/></p>
        </div>
        <div className="webdev5">
          <h1>Al</h1>
          <hr></hr>
          <p><TargetBlank label="Github" target="_blank" openLink="https://github.com/almurawski15"/></p>
          <p><TargetBlank label="LinkedIn" target="_blank" openLink="https://www.linkedin.com/in/alexandra-murawski-8a312769/"/></p>
          <p><ButtonMailto label="Email" mailto="mailto:almurawski15@gmail.com"/></p>
        </div>
        <div className="webdev5">
          <h1>Heather</h1>
          <hr></hr>
          <p><TargetBlank label="Github" target="_blank" openLink="https://github.com/hstor3"/></p>
          <p><TargetBlank label="LinkedIn" target="_blank" openLink="https://www.linkedin.com/in/heather-storseth-5571501b9/"/></p>
          <p><ButtonMailto label="Email" mailto="mailto:heatherstorseth3@gmail.com"/></p>
        </div>
        <div className="webdev5">
          <h1>Michael</h1>
          <hr></hr>
          <p><TargetBlank label="Github" target="_blank" openLink="https://github.com/mbussert"/></p>
          <p><TargetBlank label="LinkedIn" openLink="https://www.linkedin.com/in/michaelbussert/"/></p>
          <p><ButtonMailto label="Email" mailto="mailto:mbussert@gmail.com"/></p>
        </div>
        <div className="webdev5">
          <h1>Valerie</h1>
          <hr></hr>
          <p><TargetBlank label="Github" target="_blank" openLink="https://github.com/vruss14"/></p>
          <p><TargetBlank label="LinkedIn" openLink="https://www.linkedin.com/in/valerie-russell-732731162/"/></p>
          <p><ButtonMailto label="Email" mailto="mailto:vruss14@gmail.com"/></p>
        </div>
        <div className="webdev5">
          <h1>Brandon</h1>
          <hr></hr>
          <p><TargetBlank label="Github" target="_blank" openLink="https://github.com/CrispyCoder817"/></p>
          <p><TargetBlank label="LinkedIn" openLink="https://www.linkedin.com/in/brandongeorgemerritt/"/></p>
          <p><ButtonMailto label="Email" mailto="mailto:brandongmerritt@gmail.com"/></p>
        </div>
      </div>
    );
  }
}

export default About;
