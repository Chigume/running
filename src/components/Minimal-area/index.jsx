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
                captivating brand stories. Through consistency and attention to detail Ive managed to gain the trust of reputable brands and individuals over the years.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> My Mission
                  </h6>
                  <p>
                  I am committed to design that stands the test of time. My mission is to create value for brands through creativity. This is made possible by creating visuals that remain relevant, evolving with brands while maintaining a core identity thats both unique and memorable.                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> My Goals
                  </h6>
                  <p>
                  My main goal is value addition. I seek to offer the best value possible to my clients through creativity and the use of current technologies.                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Me?
                  </h6>
                  <p>
                  Nothing beats experience, creativity, versatility & attention to detail. Through consistent creation of aesthetic visuals, I have managed to gain the trust of reputable brands and I have managed to stand out as one of the best graphic designers in my space.                  </p>
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
