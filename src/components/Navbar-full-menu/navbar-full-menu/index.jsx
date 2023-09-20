/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {theme ? (
                theme === "light" ? (
                  <img src={`${appData.darkLogo}`} alt="logo" />
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img src={`${appData.lightLogo}`} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">01.</span>Home
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home1-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>Main Home
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home2-dark">
                              <a className="sub-link">
                                <span className="nm">02.</span>Videography & photography
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home3-dark">
                              <a className="sub-link">
                                <span className="nm">03.</span>Corporate Branding
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home4-dark">
                              <a className="sub-link">
                                <span className="nm">04.</span>Digital Marketing
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                         
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/about/about-dark">
                        <a className="link">
                          <span className="nm">02.</span>About Me
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">03.</span>Portfolio
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works/works-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>Magazines
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works2/works2-dark">
                              <a className="sub-link">
                                <span className="nm">02.</span>Newsletters
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works3/works3-dark">
                              <a className="sub-link">
                                <span className="nm">03.</span>Company Profiles
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works4/works4-dark">
                              <a className="sub-link">
                                <span className="nm">04.</span>Billboard Design
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">04.</span>Showcases
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/showcase/showcase-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>Banner Design
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/showcase2/showcase2-dark">
                              <a className="sub-link">
                                <span className="nm">02.</span>Poster Design
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/showcase3/showcase3-dark">
                              <a className="sub-link">
                                <span className="nm">03.</span>Logo Design
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/showcase4/showcase4-dark">
                              <a className="sub-link">
                                <span className="nm">04.</span>Flier Design
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <Link href="/contact/contact-dark">
                        <a className="link">
                          <span className="nm">05.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>+263 77 603 7011</p>
                  <p>+263 71 701 8825</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                 
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="info@tawongamakotose.com<">info@tawongamakotose.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
