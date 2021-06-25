import React from 'react';

function ContactForm() {
    return (
        <div className="contact-form-container">
            <form className="contact-form">
                <h2 className="contact-form-text">Contact US</h2>
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
                    cols="30" 
                    rows="10"
                    ></textarea>
                <button 
                    type="submit" 
                    className="contact-form-submit"  
                >Send Message</button>
                
            </form>
            
        </div>
    )
}

export default ContactForm;
