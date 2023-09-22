/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetails2Images = () => {
  return (
    <section className="projdtal">
      <h2 style={{display: 'none'}}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-3 pr-0">
              <a href="#0">
                <img alt="" src="/img/portfolio/project2/a.jpg" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="#0">
                <img alt="" src="/img/portfolio/project1/Project2.jpg" />
              </a>
            </div>

            <div className="col-md-3 pr-0">
              <a href="#0">
                <img alt="" src="/img/portfolio/project2/c.jpg" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="#0">
                <img alt="" src="/img/portfolio/project2/h.jpg" />
              </a>
            </div>
            <div className="col-12">
              <a href="#0">
                <img alt="" src="/img/portfolio/project1/b.jpg" className="big-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Images;
