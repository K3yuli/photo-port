// modified import React to apply hook useState
import React, { useState } from "react";


// add hook to manage the form data
const [formState, setFormState] = useState({
    // clear input fields on the component loading by setting initial state to empty strings
    name: '',
    email: '',
    message: ''
});

const { name, email, message } = formState;


function ContactForm() {
    
    // declare handleChange function
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    // declare the handleSubmit function
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // JSX
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            {/* add defaultValue attribute to each of the three form elements
            with this attribute, we can assign the initial state values to input fields in the DOM */}
                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;