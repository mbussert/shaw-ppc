import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
    <html>
    <main className="fourohfour">
      <body>
        <div>
          <container className="container-card">
          <h1 className="header-text">404 Error: Page Not Found</h1>
          <button className="btn"><Link to="./">Go Back Home</Link></button>
          </container>
        </div>
      </body>
      </main>
      </html>
    );
  }
}

export default NotFound;
