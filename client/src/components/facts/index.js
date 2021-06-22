import React from "react";

function Facts() {
    return (
        <div className="fact-section">
            <h1 className="fact-title">Question and Answer</h1>
            
            <ul className="fqa-list">
                <li> Instruction 1</li>
                <li> Instruction 2</li>
                <li> Instruction 3</li>
            </ul>

            <div className="image-container">
                <img className="images" src="" alt="sc1" />
                <img className="images" src="" alt="sc2" />
            </div>
        </div>
        );
    }

export default Facts;