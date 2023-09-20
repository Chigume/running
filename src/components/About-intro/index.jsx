import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>About Me</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Hi there! My name is Tawonga Makotose. I am a Creative Designer, 
                Content Creator & Business Consultant, 
                with over 5 years experience in the creative industry. 
                I specialise in branding, inspirational content creation & digital marketing. 
                I have worked on many projects with vaarious reputable brands accross different business fields. My mission is to add value to brands & help them stand out 
                through elegant & thoughtful visual presentations, paying maximum attention 
                to detail.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
