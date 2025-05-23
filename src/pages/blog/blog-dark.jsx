import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import BlogStanderd from "../../components/Blog-standerd";
import Footer from "../../components/Footer";

const BlogDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h1 className="extra-title mb-10">My Blog.</h1>
                <p>
                  All the most current news and events of my creativeness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogStanderd />
      <Footer />
    </DarkTheme>
  );
};

export default BlogDark;
