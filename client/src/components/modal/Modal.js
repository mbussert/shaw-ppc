import React, {useState} from 'react'
import { Link } from "react-router-dom";


    const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
        <div className="modal-1">
            
            <div className="modal-title">
                <h1> It looks like you are not 
                    Currently logged in</h1>
            </div>

            <div className="modal-body">
                <p>
                You can continue to use the calculator however you will not be able 
                to save the results until you create an account
                </p>
            </div>

            <div className="modal-buttons">
                <button className="modal-btn-continue" onClick={hide}>CONTINUE</button>

                <Link to="./Login">
                <button className="modal-btn-signup">SIGN UP</button>
                </Link>
            </div>
    
        </div>
  </React.Fragment>, document.body
) : null;

export default Modal;