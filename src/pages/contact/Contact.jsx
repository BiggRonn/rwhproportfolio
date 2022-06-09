import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import toast from "react-hot-toast";

export default function Contact() {
    const form = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_yq4pu49', 'template_hzv5jbv', form.current, 'oe9BoAzOhTzbOpxG-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
       toast.success("Email received, I will reply ASAP!")
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

                </form>
                <div className="iconContainer">
                  <a href="https://github.com/BiggRonn" target="_blank" rel="noreferrer"><FaGithub className="icon"/></a>
                  <a href="https://www.linkedin.com/in/ronaldweshoward/" target="_blank" rel="noreferrer"><FaLinkedin className="icon"/></a>
                  <a href="https://twitter.com/WesHowa19257781" target="_blank" rel="noreferrer"><FaTwitter className="icon"/></a>
                  <a href="https://www.instagram.com/biggronwes/" target="_blank" rel="noreferrer"><FaInstagram className="icon"/></a>
                </div>
            </div>
         
        </div>
    )
}

