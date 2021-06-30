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
            <label htmlFor="contact-form-label-name">Full Name</label>
                <input 
                    type="text" 
                    name="fullName"
                    // placeholder="Full Name"
                    className="contact-form-name" 
                />
                <label htmlFor="contact-form-label-email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    // placeholder="Email"
                    className="contact-form-email" 
                />
                <label htmlFor="contact-form-label-subject">Subject</label>
                <input 
                    type="text" 
                    name="subject"
                    // placeholder="Subject"
                    className="contact-form-subject" 
                />
                <label htmlFor="contact-form-label-message">Message</label>
                <textarea 
                    name="message"
                    // placeholder="Message" 
                    className="contact-form-message" 
                    // cols="30" 
                    rows="10"
                ></textarea>

            </form>

            <button 
                type="submit" 
                className="contact-form-submit">
            Send Message
            </button>
            
        </div>
        </>
    )
}

export default ContactForm;
