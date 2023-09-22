/* eslint-disable @next/next/no-img-element */
import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Split from "../Split";

const NumbersWithVideo = ({ theme = "dark" }) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(/img/pattern${theme === 'light' ? '-light':''}.png)` }}
      >
       
        {typeof window !== "undefined" && (
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="X-yoQAU-3wo"
            onClose={() => setOpen(false)}
          />
        )}
        <div className="showreel">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="video-box">
                  <div className="tit-text">
                    <Split>
                      <h3 className="wow words chars splitting" data-splitting>
                        Showreel
                      </h3>
                    </Split>
                  </div>
                  <div className="wow imago">
                    <div className="img">
                      <img src="/img/one.jpg" alt="" />
                    </div>
                    <div className="vid-icon">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(true);
                        }}
                        className="vid"
                        href="https://www.youtube.com/watch?v=X-yoQAU-3wo"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <i className="fas fa-play"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersWithVideo;
