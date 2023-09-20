/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About Me.
                </h4>
              </Split>

              <Split>
              <p className="wow txt words chars splitting" data-splitting>
                I empower brands through value addition by creating stunning visuals, brand strategies & 
                captivating brand stories. Through consistency & attention to detail I’ve managed to gain the trust of reputable brands and individuals over the years.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> My Mission
                  </h6>
                  <p>
                  My mission is to create value for brands and empowering through creativity. This is made possible through  great content creation, captivating brand stories, brand strategies & aesthetic and timeless visual designs.               
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> My Goals
                  </h6>
                  <p>
                  My main goal is to connect business brands with their audience through my creative skills i.e creating visually appealing designs that are modern, authentic and timeless. I aim at telling brand stories in a disparate way.        
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Me?
                  </h6>
                  <p>
                  As a designer I have gained experience & mastery of my field over time. This makes me not only efficient but well suited for most branding projects. My attention to detail, ever growing desire for quality and continuous improvement are some of the things that set me apart as a designer, which made it possible for me to gain the trust of reputable brands.             
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
