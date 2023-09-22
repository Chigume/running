/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
              <ul>
                  <li>
                    <span>Email : </span> info@tawongamakotose.com
                  </li>
                  <li>
                    <span>Address : </span> Office 19, M floor, Chiedza House, Harare
                  </li>
                  <li>
                    <span>Phone : </span> +263 77 603 7011, +263 71 701 8825
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                <a href="https://www.facebook.com/tawongamakotose" target="_blank" className="icon" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/tawonga.makotose/" target="_blank" className="icon" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@tawongamakotose" target="_blank" className="icon" rel="noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/tawonga-makotose/" target="_blank" className="icon" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.pinterest.com/tawongamakotose/" target="_blank" className="icon" rel="noreferrer">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="insta">
            <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="https://www.instagram.com/tawonga.makotose/" target="_blank" rel="noreferrer" >
                  <img src="/img/insta/one.avif" alt="" />
                </a>
                <a href="https://www.instagram.com/tawonga.makotose/" target="_blank" rel="noreferrer" >
                  <img src="/img/insta/two.avif" alt="" />
                </a>
                <a href="https://www.instagram.com/tawonga.makotose/" target="_blank" rel="noreferrer" >
                  <img src="/img/insta/three.avif" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
          © 2023, Abgirl Chigume <a href="https://neniwo.com" target="_blank" rel="noreferrer"> @Neniwo</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
