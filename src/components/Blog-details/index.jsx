/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

const BlogDetails = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendComment = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/testim-img.jpg" alt="" />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>When it comes to marketing your small business, you may be tempted to focus on tactics like social 
                        media advertising, email campaigns, or search engine optimization. While these tactics can be effective, 
                        theyre only part of the equation.
                         To truly stand out and build a loyal customer base, you need to invest in branding.
                        </p>
                      </div>
                      <p>
                      What is branding?
                      Branding is the process of creating a unique identity for your business that 
                      sets it apart from competitors. It includes everything from your brand name,
                       logo, and visual identity, to your brand messaging, values, and personality.
                      </p>

                      <h6>-Why is branding important for small businesses?</h6>

                      <p>
                      1.Building trust and credibility: A strong brand can help small businesses build 
                      trust and credibility with their customers. By establishing a consistent brand voice 
                      and visual identity across different platforms and channels, small businesses can show 
                      that theyre professional, reliable, and committed to their customers.

                      2.Differentiating from competitors: In a crowded market, its essential for small 
                      businesses to differentiate themselves from their competitors. 
                      A unique brand proposition and messaging can help small businesses stand out and 
                      attract customers who share their values and personality.

                      3.Creating emotional connections: A strong brand can create emotional connections 
                      with customers and foster loyalty. By expressing their values and personality through 
                      their branding, small businesses can create a sense of community and belonging that 
                      keeps customers coming back.

                      4.Increasing visibility and awareness: A strong brand can increase visibility and 
                      awareness of a small business. By creating a recognizable and memorable brand identity,
                       small businesses can attract new customers and referrals.
                      </p>


                      <h6>How can small businesses develop a strong brand identity?</h6>

                      <ul>
                        <li>
                          <span>01</span> Conduct audience research:
                          <p>To develop a strong brand identity,
                             small businesses need to understand their target audience, 
                             their needs, and their preferences. This can be done through surveys, focus groups,
                              or social media listening.</p>
                        </li>
                        <li>
                          <span>02</span> Define brand values and personality:
                          <p>Small businesses need to define their brand values and personality, 
                            and express them consistently through their branding. 
                            This includes everything from the tone of voice in their messaging, 
                            to the color scheme and typography in their visual identity.</p>
                        </li>
                        <li>
                          <span>03</span> Create a visual identity: 
                          <p>Small businesses need to create a visual identity that is unique, memorable, 
                            and reflects their brand values and personality. 
                            This includes everything from the logo, to the website design, to the packaging and signage.
                            </p>
                        </li>
                        <li>
                          <span>04</span> Be consistent: 
                          <p>
                          Small businesses need to ensure that their brand identity is consistent across all platforms 
                            and channels. This includes social media profiles, email campaigns, website design, 
                            and even employee interactions.
                          </p>
                        </li>
                      </ul>

                      <div className="quotes text-center">
                        <p>In conclusion, branding is a crucial element of small business marketing.
                         By investing in a strong brand identity, 
                        small businesses can build trust and credibility, differentiate themselves from competitors,
                         create emotional connections with customers, and increase visibility and awareness. 
                        To achieve the best results, small businesses should collaborate with a graphic designer 
                        and content creator to ensure their branding efforts are effective and consistent across all platforms.

                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/public/img/portfolio/works/Works9.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/public/img/portfolio/mas1/Mas6.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>
                        We all intend to plan ahead, but too often let the
                        day-to-day minutia get in the way of making a calendar
                        for the year. Sure, you can’t know every detail to
                        anticipate. Heck, you can’t know half the priorities
                        that will pop up in any particular month. But you can
                        plan for big picture seasonality, busy-times, and
                        events.
                      </p>
                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">Web</a>,<a href="#0">Chigume</a>,
                          <a href="#0">Abgirl</a>
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Jorden Griffin
                        </h6>
                        <p>
                          the main component of a healthy environment for self
                          esteem is that it needs be nurturing. The main compont
                          of a healthy environment.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href="/blog/blog-dark">
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>

              <div className="comments-area">
                <h5>Comments :</h5>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item relped">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendComment(500);
                      alert(JSON.stringify(values, null, 2));

                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Your Comment"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Your Email"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <button className="btn-curve btn-color btn-lg">
                                <span>Submit</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
