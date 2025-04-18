/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Marketing</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                
                  <a>
                    <img src="/img/portfolio/mas/Mas.png" alt="image" />
                  </a>
              </div>
              <div className="cont">
                <h6>Minimalistic</h6>
                <span>
                  <a href="#0">Designing</a>, <a href="#0">Brands</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
               
                  <a>
                    <img src="/img/portfolio/mas/Mas1.png" alt="image" />
                  </a>
                
              </div>
              <div className="cont">
                <h6>Surreal</h6>
                <span>
                  <a href="#0">Designing</a>, <a href="#0">Brands</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                
                  <a>
                    <img src="/img/portfolio/mas/Mas2.png" alt="image" />
                  </a>
               
              </div>
              <div className="cont">
                <h6>Aesthetic Designs</h6>
                <span>
                  <a href="#0">Designing</a>, <a href="#0">Brands</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                
                  <a>
                    <img src="/img/portfolio/mas/Mas3.png" alt="image" />
                  </a>
                
              </div>
              <div className="cont">
                <h6>Clean Designs</h6>
                <span>
                  <a href="#0">Designing</a>, <a href="#0">Brands</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                
                  <a>
                    <img src="/img/portfolio/mas/Mas4.png" alt="image" />
                  </a>
                
              </div>
              <div className="cont">
                <h6>Minimalistic</h6>
                <span>
                  <a href="#0">Designing</a>, <a href="#0">Brands</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                
                  <a>
                    <img src="/img/portfolio/mas/Mas5.png" alt="image" />
                  </a>
                
              </div>
              <div className="cont">
                <h6>Creative thinking</h6>
                <span>
                  <a href="#0">Designing</a>, <a href="#0">Brands</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
