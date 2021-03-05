import React from 'react';
import BlackCard from '../components/BlackCard';
import Card from '../components/Card';
import SimpleCard from '../components/SimpleCard';
import Slider from '../components/Slider';
import Testimonials from '../components/Testimonials';
import Layout from '../layouts/Layout';
import home from '../styles/Home.module.css';

export default function index() {
  return (
    <Layout>
      <div className={home.home}>
        <div className={home.home__hero}>
          <h1>
            Onceadev - Design Agency
            <small>Websites at your price</small>
          </h1>
          <button>Know More</button>
          <img
            src="http://theonceadev.tech/wp-content/uploads/2020/09/14.png"
            alt="heroImage"
          />
        </div>
        <section className={home.section1}>
          <small>Who we are</small>
          <h2>We Bring Your Ideas To Life</h2>
          <img
            src="http://theonceadev.tech/wp-content/uploads/2020/09/macbook2-3.png"
            alt="section1Img"
          />
          <div className={home.about}>
            <h2>About</h2>
            <p>
              We provide services from web design and development, hosting,
              mobile applications to graphic design, brand identity, digital &
              social media marketing, typeface design, & printing. Experience is
              evolving since 2018. Our core value is to bring your business the
              latest trends & designs. We follow our principles by putting our
              clients’ interests first and providing them with the most valuable
              ideas and guaranteeing the highest level of services. We are
              committed to Excellence.
            </p>
          </div>
        </section>
        <div className={home.section2}>
          <small>Services</small>
          <h2>Everything A Company Needs</h2>

          <Slider />
        </div>
        <div className={home.section3}>
          {/* <div className={home.pattern}></div> */}
          <small>TESTIMONIALS</small>
          <h2>Putting Our Client's Interests First</h2>
          <Testimonials
            p="I don't know what else to say. It really saves me time and effort. Application is exactly what our business has been lacking!"
            img="https://source.unsplash.com/random/50x50"
            name="Gowtham"
            company="VEZA SERVICES
"
          />
          <Testimonials
            p="Website design has completely surpassed our expectations. It helps us to build our business further beyond. Thanks guys, keep up the good work!"
            img="https://source.unsplash.com/random/50x50"
            name="Ganesh"
            company="IMPORT & EXPORT COMPANY
"
          />
        </div>
        <div className={home.section4}>
          <div className={home.backSection}>
            <small>WE ARE BEST AT</small>
            <h2>READY TO TAKE YOUR BRAND FURTHER</h2>
          </div>
        </div>
        <div className="section5">
          <BlackCard
            img="https://source.unsplash.com/random/50x50"
            h2="WEB DESIGNING"
            p="I don't know what else to say. It really saves me time and effort. Application is exactly what our business has been lacking!"
          />
          <BlackCard
            img="https://source.unsplash.com/random/50x50"
            h2="APP DEVELOPMENT"
            p="I don't know what else to say. It really saves me time and effort. Application is exactly what our business has been lacking!"
          />
          <BlackCard
            img="https://source.unsplash.com/random/50x50"
            h2="ADVERTISING"
            p="I don't know what else to say. It really saves me time and effort. Application is exactly what our business has been lacking!"
          />
        </div>
        <div className={home.section6}>
          <small>ASK ONCEDEV</small>
          <h2>FEW FREQUENTLY ASKED QUESTION</h2>
          <SimpleCard
            h2="Customer Care

"
            p="We don’t want to push our ideas on to customers, we simply want to make what they want. Instead of focusing on the competition, we focus on the customer."
            but="ASK A QUESTION"
          />
          <SimpleCard
            h2="Partnering & Sponsorship
"
            p="Currently onceadev team has an idea of designing a open-world action game and yes, we are looking forward for a partnership or sponsorship."
            but="ASK A QUESTION"
          />
          <SimpleCard
            h2="Hiring Inquiries 

"
            p="We are requiting freelancers for different jobs. From Digital marketing to chat bot programming. Just give it a go!"
            but="ASK A QUESTION"
          />
          <SimpleCard
            h2="Security Escalations
"
            p="The thing we care the most about is user privacy. We provide our clients with complete protection from data breach."
            but="ASK A QUESTION"
          />
          <SimpleCard
            h2="Technical Issues
"
            p="
Free service available if there is any technical issues in our projects. We always got you covered!"
            but="ASK A QUESTION"
          />
        </div>
        <div className={home.section7}>
          <div className={home.secback}>
            <h1>Contact us</h1>
            <div className={home.widget}>
              <div className={home.widgetSame}>
                <small className={home.icon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3H21M21 3V8M21 3L15 9M5 3C3.89543 3 3 3.89543 3 5V6C3 14.2843 9.71573 21 18 21H19C20.1046 21 21 20.1046 21 19V15.7208C21 15.2903 20.7246 14.9082 20.3162 14.7721L15.8228 13.2743C15.3507 13.1169 14.8347 13.3306 14.6121 13.7757L13.4835 16.033C11.0388 14.9308 9.06925 12.9612 7.96701 10.5165L10.2243 9.38787C10.6694 9.16531 10.8831 8.64932 10.7257 8.17721L9.22792 3.68377C9.09181 3.27543 8.70967 3 8.27924 3H5Z"
                      stroke="#4A5568"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </small>
                <h2>+91 7358359094</h2>
              </div>
              <div className={home.widgetSame}>
                <small className={home.icon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                      stroke="#4A5568"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </small>
                <h2>support@theonceadev.tech</h2>
              </div>
              <h2>
                <div className={home.widgetSame}>
                  <small className={home.icon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                        stroke="#4A5568"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                        stroke="#4A5568"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </small>
                  <h2>Chennai, India</h2>
                </div>
              </h2>
            </div>
            <div className={home.form}>
              <h2 htmlFor="J">Just one click away</h2>
              <form>
                <label htmlFor="name">Name*</label>
                <input type="text" placeholder="Karthick" />
                <label htmlFor="name">Email*</label>
                <input type="text" placeholder="kkedits77@gmail.com" />
                <label htmlFor="name">Comment or Message</label>
                <textarea placeholder="Hello"></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className={home.footer}>
          <div className={home.firstFooter}>
            <small> &copy; Copyright@2020 onceadev. </small>
            <h5>All rights reserved</h5>
          </div>
        </div>
      </div>
    </Layout>
  );
}
