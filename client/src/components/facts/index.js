import React from "react";
import { Link } from "react-router-dom";

function Facts() {
    return (
        <div className="fact-section">
            <h1 className="fact-title">Q & A</h1>
            
            <ul className="fqa-list">
                <li> Step 1: Navigate to the calculator tool page. </li>
                <li> Step 2: Enter your project information. </li>
                <li> Note: Manually convert measurements to inches for input.</li>
            </ul>

            <div className="image-container">
                <p>STEP 1</p>
                <img className="images" src="" alt="sc1" />
                <p>STEP 2</p>
                <img className="images" src="" alt="sc2" />
            </div>

        <button className="calc-btn" type="submit">
            <Link to="./Calculator">
                Calculator Tool</Link>
        </button>
        
        </div>

        );
    }

export default Facts;