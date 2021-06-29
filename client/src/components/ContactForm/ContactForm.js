import React, {useState, useEffect} from 'react';
import Navbar from "../../components/navbar";
import API from "../../utils/API";

function ContactForm() {

    const [loginStatus, setLoginStatus] = useState([]);

    useEffect(() => {
        loadStatus();
    }, []);

  function loadStatus() {

    API.authenticateUser()
      .then((response) => {
        setLoginStatus(response.data.login);
      })
      .catch((err) => console.log(err));
  }

    const [values,setValues] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    })
    return (
        <>
        <Navbar loginStatus={loginStatus} />
        <div className="contact-form-container">
            <h2 className="contact-form-text">Contact US</h2>
            <form className="contact-form">
                <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name"
                    className="contact-form-name" 
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    className="contact-form-email" 
                />
                <input 
                    type="text" 
                    name="subject"
                    placeholder="Subject"
                    className="contact-form-subject" 
                />
                <textarea 
                    name="message"
                    placeholder="Message" 
                    className="contact-form-message" 
                    // cols="30" 
                    rows="10"
                    ></textarea>
                <button 
                    type="submit" 
                    className="contact-form-submit"  
                >Send Message</button>

            </form>
            
        </div>
        </>
    )
}

export default ContactForm;
