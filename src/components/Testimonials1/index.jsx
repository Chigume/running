/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";
import parallaxie from "../../common/parallaxie";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
    parallaxie('.testimonials.bg-img.parallaxie');
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/3.jpg)"
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What Peapole Say?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            <span className="tbg">Testimonials</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                <p>
                    Working with Tawonga  to support our organic and
                    paid social media activity has extended the marketing
                    activities we are able to achieve platform has made
                    collaboration easy.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Alex Chikanda
                              </h6>
                              <span className="author-details">
                                Co-founder, Colabrio
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                          <div className="img">
                            <img src="/img/clients/Clients4.png" alt="" />
                          </div>
                          <h6 className="author-name custom-font">
                            Caltex Braford 
                          </h6>
                          <span className="author-details">
                            Caltex Braford, Lubricants
                          </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                <p>
                    Tawonga started o our digital marketing , but his
                    scientific approach to digital marketing and the results
                    they have achieved made it an easy decision for us to
                    handover the management.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Alex Regelman
                              </h6>
                              <span className="author-details">
                                Co-founder, Colabrio
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                          <div className="img">
                            <img src="/img/clients/Clients1.png" alt="" />
                          </div>
                          <h6 className="author-name custom-font">
                            Kudzi
                          </h6>
                          <span className="author-details">
                            Founder, A&B Sports
                          </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                <p>
                    I would highly recommend Tawonga. I worked with him
                    on an animation for our U+2018 Click &amp; Collect U+2019
                    service. He is different from any other agency I have
                    worked with in the past.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Rosebud 
                              </h6>
                              <span className="author-details">
                                Founder, ImageFair
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                          <div className="img">
                            <img src="/img/clients/Clients5.png" alt="" />
                          </div>
                          <h6 className="author-name custom-font">
                            Danai 
                          </h6>
                          <span className="author-details">
                            Founder, Itravel Holidays
                          </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
