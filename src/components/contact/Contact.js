import React, { useRef } from "react";
import "./contact.css";
import { Envelope, Whatsapp } from "react-bootstrap-icons";

function Contact() {
  const form = useRef();

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h1>Contact me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <Envelope className="contact__icon" />
            <h4>Email</h4>
            <h5>judekum14@mail.com</h5>
            <a href="mailto:judekum14@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <Whatsapp className="contact__icon" />
            <h4>Whatsapp</h4>
            <h5>+237675827455</h5>
            <a
              href="https://api.whatsapp.com/send?phone+237675827455"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
