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
              What People Say?
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
                Top notch service and I appreciate how patient you were throughout the service process until I got exactly what I wanted. Thank you so much!
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            
                          </>
                        ) : (
                          <>
                          <div className="img">
                            <img src="/img/clients/SA Logo.jpg" alt="" />
                          </div>
                          <h6 className="author-name custom-font">
                            Tasha
                          </h6>
                          <span className="author-details">
                            Shoe Addicts
                          </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                <p>
                Thank you so much for the design I loved it, clean and on the dot. My customers love it too. It has since increased traffic to our shop. I will refer more people to you. GOD bless.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                      
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
                I had the pleasure of working with Tawonga for my projects and I have to say I am beyond impressed with his skills. Overall, I highly recommend Tawonga for anyone looking to take their work to the next level. Thank you for all of your hard work and dedication
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            
                          </>
                        ) : (
                          <>
                          <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/tinaani.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Tinaani Nick 
                              </h6>
                              <span className="author-details">
                                Author & Relationship Expert
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                <p>
                Top notch service and I appreciate how patient you were throughout the service process until I got exactly what I wanted. Thank you so much!                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            
                          </>
                        ) : (
                          <>
                          <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/Clients3.png" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Rosebud
                              </h6>
                              <span className="author-details">
                                Image Fair
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                <p>
                Thank You so Much Tawonga for an excellent service looking forward to do more business with you                 </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            
                          </>
                        ) : (
                          <>
                          <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/Intelstar.jpeg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Law
                              </h6>
                              <span className="author-details">
                                Founder Intelstar
                              </span>
                            </div>
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
