import React, { useState, useRef, useContext } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import axios from 'axios';



const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false); // To show success message
  const [errorMsg, setErrorMsg] = useState(''); // To show error message
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  })

  const handleChange=(e)=>{
    // console.log(e)
    const {name,value}=e.target
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const sendEmail = (e) => {
    e.preventDefault();
    axios.post("https://farzanatech.com/hrm/api/contact/save",formData)
    // axios.post("http://localhost/HRM_Project_Final/admin/api/contact/save",formData)
    .then(res=>{
      console.log(res)
    })
    // console.log(formData)

    // Accessing form fields in email
    const formElement = form.current.elements;
    const name = formElement.name.value.trim();
    const email = formElement.email.value.trim();
    const subject = formElement.subject.value.trim();
    const message = formElement.message.value.trim();

    // Simple validation
    if (!name || !email || !message ||!subject) {
      setErrorMsg('Please fill up all the fields');
      return;
    }
 // Show alert with form values
 alert(`Form Submitted:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

    setErrorMsg(''); // Clear error message if validation passes

    // Sending email using emailjs
    emailjs
      .sendForm(
        'service_w5arqzl',  // Your service ID
        'template_uvgo4dp', // Your template ID
        form.current,       // The form reference
        'ltr3AIaP-ix220TXY' // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true); // Show success message
          form.current.reset(); // Clear form fields
          // Hide success message after 2 seconds
          setTimeout(() => setDone(false), 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMsg('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <span style={{ color: '#0da975', fontSize: '25px' }}>
            {done && 'Thanks for contacting me'}
          </span>
          <span style={{ color: 'red', fontSize: '18px' }}>{errorMsg}</span>
          <input type="text" name="name" className="user" placeholder="Name" onChange={handleChange}/>
          <input type="email" name="email" className="user" placeholder="Email" onChange={handleChange}/>
          <input type="text" name="subject" className="user" placeholder="Subject" onChange={handleChange}/>
          <textarea name="message" className="user" placeholder="Message" onChange={handleChange}/>
          <button type="submit" className="button">Send</button>
          <div className="blur c-blur1" style={{ background: 'var(--orange)' }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


// http://localhost/HRM_Project_Final/admin/api/contact
