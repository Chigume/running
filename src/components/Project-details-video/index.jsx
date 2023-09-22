import React from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const ProjectDetailsVideo = ({videoBackground, videoId, videoType}) => {
    const [isOpen, setOpen] = React.useState(false);
    React.useEffect(() => {
      console.clear();
    }, []);
    return (
      <section>
        <h2 style={{display: 'none'}}> &nbsp; </h2>
        <div className="container-fluid">
          <div
            className="video-wrapper section-padding bg-img parallaxie valign"
            style={{ backgroundImage: `url(/img/portfolio/project1/Project4.jpg)` }}
            data-overlay-dark="4"
          >
            <div className="full-width text-center">
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
          </div>
        </div>
      </section>
    );
}

export default ProjectDetailsVideo
