/* eslint-disable @next/next/no-img-element */
import React from "react";
import tooltipEffect from "../../common/tooltipEffect";
import teamSkillsProgress from "../../common/teamSkillsProgress";

const TeamWithSkills = () => {
  React.useEffect(() => {
    tooltipEffect()
    teamSkillsProgress()
  }, [])
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>My World</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit custom-font mb-15">
                I help to create visual strategies.
              </h3>
              <p>
               I create award-winning designs, remarkable brands
                and cutting-edge logos
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h6 className="custom-font">Graphic Design</h6>
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
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div
                      className="img sizxl mb-30"
                      data-tooltip-tit="Stephanie Lawrence"
                      data-tooltip-sub="CEO, Colabrio Media"
                    >
                      <img src="/public/img/portfolio/works/Works 5.jpg" alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizmd"
                      data-tooltip-tit="Craft Africa"
                      data-tooltip-sub="Zimbabwe"
                    >
                      <img src="/public/img/portfolio/project1/Project1.jpg" alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                  <div
                      className="img sizmd"
                      data-tooltip-tit="Craft Africa"
                      data-tooltip-sub="Zimbabwe"
                    >
                      <img src="/public/img/portfolio/works/Works 3.jpg" alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizmd"
                      data-tooltip-tit="Craft Africa"
                      data-tooltip-sub="Zimbabwe"
                    >
                      <img src="/public/img/portfolio/works/Works 6.jpg" alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWithSkills