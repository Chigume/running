/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutUs2 = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                 My 5 years working experience make a different business
                  agency services.
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
              Hi there! My name is Tawonga Makotose. I am a Creative Designer, 
                Content Creator & Business Consultant, 
                with over 5 years experience in the creative industry. 
                I specialise in branding, inspirational content creation & digital marketing. 
                I have worked on many projects with various business & individual clients across
                different fields. 
              </p>
              <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
              My aim is to add value to brands & help them stand out 
                through elegant & thoughtful visual presentations, paying maximum attention 
                to detail.
              </p>
              <Split>
                <Link href="/about/about-dark">
                  <a
                    className="words chars splitting simple-btn custom-font mt-30 wow"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/intro3.jpg" alt="" />
              </div>
              <div className="skills-circle wow fadeInUp" data-wow-delay=".8">
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={87}
                      className="custom-font"
                      strokeWidth={2}
                      text={`${87}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>Business</span>
                    <h6>Consulting</h6>
                  </div>
                </div>
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={89}
                      strokeWidth={2}
                      className="custom-font"
                      text={`${89}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>Digital</span>
                    <h6>Marketing</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
