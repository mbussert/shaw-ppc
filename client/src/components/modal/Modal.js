import React, {useState, useEffect, useCallback, useRef} from 'react'
import { NavLink } from "react-router-dom";

function Modal () {

    const modalRef = useRef();
   

    const [status, setStatus] = useState({ display: "show" });

    function hideModal() {
        setStatus({display: "hide"})
    }

    const closeModal = e => {
        if (modalRef.current === e.target) {
            hideModal(false);
        }
    }

    if(status.display === "hide") {
        return null;
    } else {

        return (
            <React.Fragment>
            <div className="modal-1">
                
                <div className="modal-title">
                    <h1> It looks like you are not 
                        Currently logged in!</h1>
                </div>

                <div className="modal-body">
                    <p>
                    You can continue to use the calculator, however, you will not be able 
                    to save the results until you create an account.
                    </p>
                </div>

                <div className="modal-buttons">
                    <button className="modal-btn-continue" onClick = {() => hideModal()} >CONTINUE</button>
                    
                    <button className="modal-btn-signup">
                    <NavLink to="./Create">
                    SIGN UP
                    </NavLink>
                    </button>
                </div>
            </div>
            <div className="overlay" ref={modalRef} onClick={hideModal}></div>
        </React.Fragment>
        )

    }

}

export default Modal;
