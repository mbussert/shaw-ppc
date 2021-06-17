import React, { useState } from "react";
import API from "../../utils/API";

function Calculator() {

  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.body) {
      console.log("POST is OK");
      API.saveOrder({
        title: formObject.title,
        body: formObject.body
      })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator">
        <form>
          <input type="text" name="title" placeholder="Type a title..." onChange={handleInputChange}></input>
          <input type="text" name="body" placeholder="Type a number..." onChange={handleInputChange}></input>
          <button onClick={handleFormSubmit}>Calculate</button>
          <button>Clear</button>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
