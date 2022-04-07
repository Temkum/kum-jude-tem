import React from "react";
import './services.css'
import {Check} from 'react-bootstrap-icons'

function Services() {
  return (<section id='services'>
      <h5>What I offer</h5>
      <h1>Services</h1>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <Check className="service__icon" />
              <p>I build sites with beautiful and intuitive designs, fast load times that are meant for a single purpose - get you results.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>I build whatever you have in mind with a goal oriented vision.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>Get your mockups transformed into a real app or website.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>No drag and drop web builders used. I provide custom code that meet and fit your needs. You own a customizable, fast & intuitively designed webapp or site.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>You want an app or website that works. Well, it must look great. I will help you design, build and host a beautiful site that will grow your business.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <Check className="service__icon" />
              <p>You have an idea and you want to turn it into an online business without any hassle. I'm here to help you setup an eCommerce store that looks amazing and makes you money.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>Google ranking means more people see your products or blog posts. I ensure best SEO practices which gives your content the audience it deserves.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>I can help you develope product which attract clients who value quality and turn your leads into paying customers.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>Help you with a product that builds trusts with your ideal clients and reach a larger, more curious audience.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>I do most of the heavy lifting that in turn gives you time to focus on your business.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>I have a knack for problem solving and diligently pushing through challenges, so let me help you solve that problem.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
        <ul className="service__list">
            <li>
              <Check className="service__icon" />
              <p>Backend is the brain and nerve center of an application and controls what happens on the server and in the cloud.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>I aim to provide secure and powerful server-side code for web applications. I develop robust web portals, CMS and other web based solutions.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>I design web apps to be stable, scalable working together with intuitive frontend with optimized asynchronous calls.</p>
            </li>
            
            <li>
              <Check className="service__icon" />
              <p>Combining technologies such as Node.js and React, you'll get applications with exceptional scalability.</p>
            </li>
            <li>
              <Check className="service__icon" />
              <p>Not only do you get a robust application, I will also strengthen the performance of your APIs and maximize your enterprise's growth.</p>
            </li>
          </ul>
        </article>
      </div>
  </section>
  )
}

export default Services;
