import React from "react";
import { Link } from "react-router-dom";

function Facts() {
    return (
        <div className="fact-section">
            <h1 className="fact-title">Q & A</h1>

            <ul className="fqa-list">
                <li> What measurements am I able to enter with the tool? </li>
                <li> Users are able to enter measurements in inches. Please calculate manually your measurements from feet to inches to continue calculation of orders.</li>
                <li> Can I calculate more than one wall in an order? </li>
                <li> Users may calculate multiple wall measurements all under one project name/order.</li>
                <li> Can I use the calculator tool without creating an account with WallPro?</li>
                <li> Users are not required to create an account to use the calculator tool but it is suggested to reference previous calculations.</li>
            </ul>

            <div className="image-container">
                <img className="images" src="" alt="sc1" />
                <img className="images" src="" alt="sc2" />
            </div>

        <button className="create-account-btn">
            <Link to="./Calculator">
                CALCULATOR TOOL</Link>
        </button>
        
        </div>

        );
    }

export default Facts;