/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const PortfolioTwoColumn = () => {
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
        <div className="gallery full-width">
          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <img src="/img/portfolio/works/Works 1.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Creativity Demand</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/project-details2/project-details2-dark">
                    <a>
                      <img src="/img/portfolio/works/Works 2.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Through The Breaking</h6>
                    <span>
                      <a href="#0">Design</a>, <a href="#0">WordPress</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <img src="/img/portfolio/works/Works 3.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Create With Creatives</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10 offset-lg-2">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/project-details2/project-details2-dark">
                    <a>
                      <img src="/img/portfolio/works/6.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Blast From The Past</h6>
                    <span>
                      <a href="#0">Design</a>, <a href="#0">WordPress</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-11 offset-lg-1">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/project-details2/project-details2-dark">
                    <a>
                      <img src="/img/portfolio/works/Works 5.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>See It Yourself</h6>
                    <span>
                      <a href="#0">Design</a>, <a href="#0">WordPress</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <img src="/img/portfolio/works/Works 4.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Energies of Love</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/project-details2/project-details2-dark">
                    <a>
                      <img src="/img/portfolio/works/Works 6.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Blast From The Past</h6>
                    <span>
                      <a href="#0">Design</a>, <a href="#0">WordPress</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <img src="/img/portfolio/works/Works8.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <img src="/img/portfolio/works/Works9.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <img src="/img/portfolio/works/Works10.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/project-details2/project-details2-dark">
                <a>
                  <img src="/img/portfolio/works/Works11.jpg" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwoColumn;
