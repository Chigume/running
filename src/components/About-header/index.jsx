import React from "react";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/one.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Tawonga</h1>
              <div className="path">
                {/* Replace <a href="/"> with <Link href="/"> */}
                <Link href="/">Home</Link>
                <span>/</span>
                {/* Replace <a href="#0" className="active"> with <Link href="/about"> */}
                <Link href="/about" className="active">
                  About Tawonga Makotose
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;