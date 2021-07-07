import React from "react";
import { Link } from "react-router-dom";

function Facts() {
    return (
        <div className="fact-section">
            <h1 className="fact-title">Q & A</h1>

            <ul className="fqa-list">
                <li> What measurements am I able to enter with the tool? </li>
                <li> Users are able to enter measurements in inches. Please calculate manually your measurements from feet to inches to continue calculation of orders.
                    <br/> Distance in inches = (distance in feet) x (12 inches/foot)
                </li>
                <li> Can I calculate more than one wall in an order? </li>
                <li> Currently, only one wall can be created per order. A future update will provide the opportunity to save multiple walls to a single project.</li>
                <li> Can I use the calculator tool without creating an account with WallPro?</li>
                <li> Users are not required to create an account to use the calculator tool however we strongly suggest you do to reference previous calculations.</li>
            </ul>

            {/* <div className="image-container">
                <img className="images" src="/images/calculator-snapshot1.PNG" alt="sc1" />
                <img className="images" src="/images/calculator-snapshot2.png" alt="sc1" alt="sc2" />
                <img className="images" src="/images/calculator-snapshot3.png" alt="sc1" alt="sc2" />
                <img className="images" src="/images/calculator-snapshot4.png" alt="sc1" alt="sc2" />
            </div> */}

        <button className="create-account-btn">
            <Link to="./Calculator">
                CALCULATOR TOOL</Link>
        </button>
        
        </div>

        );
    }

export default Facts;