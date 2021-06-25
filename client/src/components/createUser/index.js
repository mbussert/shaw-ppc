import React, { useState } from "react";
import API from "../../utils/API";

function CreateUser() {
  const [userObject, setUser] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...userObject, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if(userObject.pass1 !== userObject.pass2) {
      alert("Your passwords do not match. Please try again.")
    }

    if (userObject.first && userObject.last && userObject.email) {
      console.log("Account has been created.");

      API.saveUser({
        first: userObject.first,
        last: userObject.last,
        email: userObject.email,
        password: userObject.pass1
      }).catch((err) => console.log(err));
      location.href='/'
    } else {
      console.log("Nooo!");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Create an account</h2>
      <div className="userFirst-div">
        <label>First Name:</label>
        <input
          className="add-first"
          type="text"
          name="first"
          onChange={handleInputChange}
        />
      </div>

      <div className="userLast-div">
        <label>Last Name:</label>
        <input
          className="add-last"
          name="last"
          onChange={handleInputChange}
          type="text"
        />
      </div>

      <div className="userEmail-div">
        <label>Email:</label>
        <input
          className="add-email"
          name="email"
          onChange={handleInputChange}
          type="text"
        />
      </div>

      <div className="userPass-div">
        <label>Password:</label>
        <input
          className="add-pass"
          name="pass1"
          onChange={handleInputChange}
          type="password"
        />
      </div>

      <div className="userPass-div-div">
        <label>Password:</label>
        <input
          className="pass-add-pass"
          name="pass2"
          onChange={handleInputChange}
          type="password"
        />
      </div>

      <button className="create-btn" type="submit">
        Create an Account
      </button>
    </form>
  );
}

export default CreateUser;
