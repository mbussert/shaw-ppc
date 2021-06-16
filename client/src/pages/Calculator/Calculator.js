import React from "react";
import "./style.scss";

function Calculator() {
  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator">
        <form>
          <input type="text"></input>
          <input type="text"></input>
          <button>Calculate</button>
          <button>Clear</button>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
