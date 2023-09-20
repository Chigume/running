/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from '../Split';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(/img/slid/four.jpg)` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                      channel="youtube"
                      autoplay
                      isOpen={isOpen}
                      videoId="X-yoQAU-3wo"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://www.youtube.com/watch?v=X-yoQAU-3wo"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="cont">
                  <Split>
                    <h3 className="wow" data-splitting>
                    Great visual content makes great brands.
                    </h3>
                  </Split>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    My Happy Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                    Tawonga is an incredibly talented graphic designer easy to work with,
                     highly professional, and captured exactly what I was looking for in
                      designing my campaign branding and website. 
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/Clients5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Danai
                          </h6>
                          <span className="author-details">
                            Founder, Itravel Holidays

                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p> 
                      Tawonga exceeded my expectations with his stunning design skills and attention to detail. Highly recommend!
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/Clients1.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Kudzi
                          </h6>
                          <span className="author-details">
                            Co-founder, B & A
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>                    
                      Thank You so Much Tawonga for an excellent service looking forward to do more business with you 
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Law
                          </h6>
                          <span className="author-details">
                            Co-founder, Intelstar
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="item">
                    <p>
                    Top notch service and I appreciate how patient you were throughout the service process until I got exactly what I wanted. Thank you so much!
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/Clients3.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Rosebud 
                          </h6>
                          <span className="author-details">
                          founder, Image Fair
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Thank you so much for the design I loved it, clean and on the dot. 
                    My customers love it too. It has since increased traffic to our shop.
                    I will refer more people to you. GOD bless.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/SA Logo.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Tasha
                          </h6>
                          <span className="author-details">
                            Co-founder, Shoe Addicts
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    I had the pleasure of working with Tawonga for my projects and I have to say I am beyond impressed with their skills.
                     He was able to take my vision and turn it into a beautiful work of art that exceeded my expectations. Not only was his design aesthetic & stunning.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/tinaani.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Tinaani Nick 
                          </h6>
                          <span className="author-details">
                          Author & Relationship Expert
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
