import React from 'react'

function Modal() {
    return (
        <div className="modal-1">
            <div className="modal-title">
                <h1> it looks like you are not 
                    Currently logged in</h1>
            </div>

            <div className="modal-body">
                <p>
                You can continue to use the calculator however you will not be able 
                to save the results until you create an account
                </p>
            </div>

            <div className="modal-buttons">
                <button className="modal-btn-continue">CONTINUE</button>
                <button className="modal-btn-signup">SIGN UP</button>
            </div>
            
        </div>
    )
}

export default Modal;
