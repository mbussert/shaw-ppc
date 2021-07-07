import React, {useState, useEffect} from 'react';
import Navbar from "../../components/navbar";
import API from "../../utils/API";
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function ContactForm() {

    const [loginStatus, setLoginStatus] = useState([]);

    const [successAlert, setSuccessAlert] = useState({
        displaySnackbar: false
    });

    const [failAlert, setFailAlert] = useState({
        displaySnackbar: false
    });

    useEffect(() => {
        window.scrollTo(0, 0)
        loadStatus();
    }, []);

  function loadStatus() {

    API.authenticateUser()
      .then((response) => {
        setLoginStatus(response.data.login);
      })
      .catch((err) => console.log(err));
  }

    const [message, setMessage] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    })

    function alphabeticalOnly(event) {
        const alphabeticalValidation = /^[a-zA-Z ]+$/
        const azResult = alphabeticalValidation.test(event);
        return azResult;
    }
    
    function emailOnly(event) {
        const emailValidation = /^[a-zA-Z0-9@.]*$/
        const emailResult = emailValidation.test(event);
        return emailResult
    }

    function handleInputChange(e) {

        if(e.target.name === "fullName") {
          const checkName = alphabeticalOnly(e.target.value);
          if(checkName === false) {
            e.target.value = e.target.value.substring(0, e.target.value.length - 1);
          }
        }
    
        if(e.target.name === "email") {
          const checkEmail = emailOnly(e.target.value);
          if(checkEmail === false) {
            e.target.value = e.target.value.substring(0, e.target.value.length - 1);
          }
        }
    
        const { name, value } = e.target;
        setMessage({ ...message, [name]: value });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    
        if(!message.fullName || !message.email || !message.subject || !message.message) {
          alert("You are missing a required input field. Please try again.");
          return;
        }
    
          API.sendMessage({
            fullName: message.fullName,
            email: message.email,
            subject: message.subject,
            message: message.subject
          })
          .then((res) => {
            if (res.status === 200) {
                setOpen(true);
                setSuccessAlert({displaySnackbar: true});
                clearForm();
            }
          }, () => {
            setOpen(true);
            setFailAlert({displaySnackbar: true});
          })
          .catch((err) => 
          console.log(err))
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    
    const [open, setOpen] = React.useState(true);
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setSuccessAlert(false);
        setFailAlert(false)
    }

    function clearForm() {

        setMessage({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
    
        document.getElementById("message-form").reset();
    
      }

    return (
        <>

        {successAlert.displaySnackbar === true ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Thanks for your message! We will get back to you soon.
          </Alert>
        </Snackbar>
        ) : null}

        {failAlert.displaySnackbar === true ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning">
            Something went wrong. Please check that you have entered a valid email.
          </Alert>
        </Snackbar>
        ) : null}
        
        <Navbar loginStatus={loginStatus} />

        <div className="contact-form-container">
            <h2 className="contact-form-text">Contact US</h2>
            <form className="contact-form" id="message-form">
            <label htmlFor="contact-form-label-name">Full Name</label>
                <input 
                    type="text" 
                    name="fullName"
                    // placeholder="Full Name"
                    className="contact-form-name" 
                    onChange={handleInputChange}
                />
                <label htmlFor="contact-form-label-email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    // placeholder="Email"
                    className="contact-form-email"
                    onChange={handleInputChange} 
                />
                <label htmlFor="contact-form-label-subject">Subject</label>
                <input 
                    type="text" 
                    name="subject"
                    // placeholder="Subject"
                    className="contact-form-subject"
                    onChange={handleInputChange} 
                />
                <label htmlFor="contact-form-label-message">Message</label>
                <textarea 
                    name="message"
                    // placeholder="Message" 
                    className="contact-form-message"
                    onChange={handleInputChange} 
                    // cols="30" 
                    rows="10"
                ></textarea>

            </form>

            <button 
                type="submit" 
                className="contact-form-submit"
                onClick={handleFormSubmit}>
                
            Send Message
            </button>
            
        </div>
        </>
    )
}

export default ContactForm;
