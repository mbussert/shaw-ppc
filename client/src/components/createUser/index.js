import React, { Component } from "react";

class CreateUser extends Component {

  render() {
    return (
      <form>
        <h2>Create an account</h2>
        <div className="userFirst-div">
          <label for="create-first">First Name:</label>
          <input className="add-first" type="text" />
        </div>

        <div className="userLast-div">
          <label for="create-last">Last Name:</label>
          <input className="add-last" type="text" />
        </div>

        <div className="userEmail-div">
          <label for="create-email">Email:</label>
          <input className="add-email" type="text" />
        </div>

        <div className="userUser-div">
          <label for="create-user">Username:</label>
          <input className="add-user" type="text" />
        </div>

        <div className="userPass-div">
          <label for="create-pass">Password:</label>
          <input className="add-pass" type="password" />
        </div>

        <div className="userPass-div-div">
          <label for="pass-create-pass">Password:</label>
          <input className="pass-add-pass" type="password" />
        </div>

        <button className="create-btn" type="submit">
          Create an Account
        </button>
      </form>
    );
  }
}

export default CreateUser;