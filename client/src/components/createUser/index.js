import React, { useState } from "react";
import API from "../../utils/API";
import "./index.css";

function CreateUser() {

  const [userObject, setUser] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({...userObject, [name]: value})
  };


  function handleFormSubmit(e) {
    e.preventDefault();
    if (userObject) {
      console.log('Yay!')
      // 
      API.saveUser({
        first: userObject.first,
        last: userObject.last,
        email: userObject.email,
        pass1: userObject.pass1,
        pass2: userObject.pass2,
        password: userObject.pass1 
      })
    } else {
      console.log('Nooo!')
    }
  }

    return (
      <form onSubmit={handleFormSubmit}>
        <h2>Create an account</h2>
        <div className="userFirst-div">
          <label for="create-first">First Name:</label>
          <input 
          className="add-first" 
          type="text" 
          name='first'
          onChange={handleInputChange}
          />
        </div>

        <div className="userLast-div">
          <label for="create-last">Last Name:</label>
          <input 
          className="add-last" 
          name='last'
          onChange={handleInputChange}
          type="text" />
        </div>

        <div className="userEmail-div">
          <label for="create-email">Email:</label>
          <input 
          className="add-email" 
          name='email'
          onChange={handleInputChange}
          type="text" />
        </div>

        <div className="userPass-div">
          <label for="create-pass">Password:</label>
          <input 
          className="add-pass" 
          name='pass1'
          onChange={handleInputChange}
          type="password" />
        </div>

        <div className="userPass-div-div">
          <label for="pass-create-pass">Password:</label>
          <input 
          className="pass-add-pass" 
          name='pass2'
          onChange={handleInputChange}
          type="password" />
        </div>

        <button className="create-btn" type="submit">
          Create an Account
        </button>
      </form>
    );
  }

export default CreateUser;