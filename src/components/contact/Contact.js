import React, { useRef } from 'react';
import './contact.css';
import { Envelope, Whatsapp } from 'react-bootstrap-icons';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1dil46n',
      'template_mq03r04',
      form.current,
      'PRxeq7g9sJRe9-5Ze'
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h6 className="txt">Get in touch</h6>
      <h2>
        Awesome! <br />
        Now, it's your turn to say hi.
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:judekum14@gmail.com" target="_blank" rel="noreferrer">
            <article className="contact__option">
              <Envelope className="contact__icon" />
              {/* <h4>Email</h4> */}
              <h5>judekum14@mail.com</h5>
              Send a message
            </article>
          </a>
          <a
            // href="https://api.whatsapp.com/send?phone=+237675827455"
            href="https://wa.me/00237675827455"
            target="_blank"
            rel="noreferrer"
          >
            <article className="contact__option">
              <Whatsapp className="contact__icon" />
              {/* <h4>Whatsapp</h4> */}
              <h5>+237 675 827 455</h5>
              Send a message
            </article>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
