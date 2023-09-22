/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";

const WorksStyle1 = () => {
  React.useEffect(() => {
    tooltipEffect();
  }, []);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{display: 'none'}}> &nbsp; </h2>
      <div className="container">
        <div className="row lg-space">
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="img/portfolio/works/Works 1.jpg/" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Branding"
                  >
                    <img src="/img/portfolio/works/Works 2.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Photography"
                  >
                    <img src="/img/portfolio/works/Works 3.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/Works 4.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Web Design"
                  >
                    <img src="/img/portfolio/works/Works 5.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Photography"
                  >
                    <img src="/img/portfolio/works/Works 6.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Creative"
                  >
                    <img src="/img/portfolio/works/Works 7.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Branding"
                  >
                    <img src="/img/portfolio/works/Works 8.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/Works 9.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/Works 10.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href="">
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/works/Works 11.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
