import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (

    // No need to include the lines commented out -- React should automatically add these when the page is displayed

    // <html>
    // <main className="fourohfour">
    //   <body>
        // <div>
          <div className="container-card">
            <h1 className="header-text">404 Error: Page Not Found</h1>
            <button className="btn"><Link to="./">Go Back Home</Link></button>
          </div>
        // </div>
      // </body>
      // </main>
      // </html>
    );
  }
}

export default NotFound;
