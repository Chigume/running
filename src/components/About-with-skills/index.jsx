import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";
import Split from "../Split";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3 className="main-title wow" data-splitting>
                My aim is to add value to brands & help them stand out 
                through elegant & thoughtful visual presentations, paying maximum attention 
                to detail.                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".5s">
              Hi there! My name is Tawonga Makotose. I am a Creative Designer, 
                Content Creator & Business Consultant, 
                with over 5 years experience in the creative industry. 
                I specialise in branding, inspirational content creation & digital marketing. 
                I have worked on many projects with various business & individual clients across
                different fields. 
              </p>
              <a href="/public/img/taw.pdf" className="simple-btn mt-40">
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">Corporate Branding</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Digital Marketing</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Graphic Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="88%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
