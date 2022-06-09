import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Contact() {
    const [message, setMessage] = useState(false)
    const form = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_yq4pu49', 'template_hzv5jbv', form.current, 'oe9BoAzOhTzbOpxG-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        setMessage(true);
    }
    return (
        <div className = "contact" id = "contact">
            <div className="contactContainer">
                <h2>Contact</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" name="from_name" placeholder="Name" />
                    <input name="reply_to"type="text" placeholder="Email" />
                    <textarea name = "message"placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your interest, an email has been sent to my account and I will respond quickly!</span>}
                </form>
                <div className="iconContainer">
                  <a href="https://github.com/BiggRonn" target="_blank" rel="noreferrer"><FaGithub/></a>
                  <a href="https://www.linkedin.com/in/ronaldweshoward/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                  <a href="https://twitter.com/WesHowa19257781" target="_blank" rel="noreferrer"><FaTwitter/></a>
                  <a href="https://www.instagram.com/biggronwes/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                </div>
            </div>
         
        </div>
    )
}

