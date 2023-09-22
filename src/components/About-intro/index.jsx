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
                Hello! Im Tawonga Makotose, a passionate graphic designer, with over 5 years of experience, driven by the art of visual storytelling. With a background in digital marketing, I bring a unique perspective to every project, ensuring designs not only captivate but also convert. My work is a fusion of creativity and strategy, resulting in timeless designs that leave lasting impressions and create memorable brand identities. Lets collaborate and bring your vision to life.
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
