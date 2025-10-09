import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container-fluid p-0">
        <div className="row no-gutters position-relative">
          <div className="left-header d-none d-lg-block col-lg-3 col-xl-4">
            <div className="v-center-box d-flex align-items-end text-uppercase">
              <h2 className="mb-0">About Me</h2>
            </div>
          </div>

          <div className="col-lg-9 col-xl-8">
            <div className="main-content p-5">
              <div className="main-header mb-4">
                <h6 className="sub-heading text-uppercase d-block mb-2">
                  Who I am
                </h6>
                <h1 className="main-heading d-inline-block text-uppercase pb-3 border-bottom">
                  &lt; About &gt;
                </h1>
              </div>

              <div className="row mb-5">
                <div className="mb-5 mb-sm-4 col-md-4">
                  
                </div>
                <div className="col-md-8">
                  <div className="about__text mb-5 mb-sm-4 mb-md-4">
                    <h3>I'm Laila</h3>
                    <p className="m-0">
                      a 3-rd year student of computer science student at the Kazakh-British Technical University and an aspiring web developer. 
                      I’m passionate about building modern, user-friendly 
                      web applications and constantly improving my skills in programming and design.
                    </p>
                  </div>

                  <div className="about__skills">
                    <div className="row no-gutters mb-0 mb-sm-4">
                      <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                        <div className="media">
                          <i className="fab fa-js-square icon-18 mr-3"></i>
                          <div className="media-body">
                            <h4 className="m-0">Javascript</h4>
                            <p className="m-0">
                              Flexible and powerful language for building dynamic web applications. Used everywhere from frontend to backend.

                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
                        <div className="media">
                          <i className="fab fa-react icon-18 mr-3"></i>
                          <div className="media-body">
                            <h4 className="m-0">React</h4>
                            <p className="m-0">
                              A modern JavaScript library for building fast, scalable, and interactive user interfaces.

                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row no-gutters mb-0 mb-sm-4">
                      <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                        <div className="media">
                          <i className="fab fa-sass icon-18 mr-2"></i>
                          <div className="media-body">
                            <h4 className="m-0">Sass</h4>
                            <p className="m-0">
                              A CSS preprocessor that helps write cleaner, more maintainable, and reusable styles with variables and nesting.

                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-0 pl-sm-3 col-sm-6">
                        <div className="media">
                          <i className="fab fa-node-js icon-18 mr-3"></i>
                          <div className="media-body">
                            <h4 className="m-0">Node.js</h4>
                            <p className="m-0">
                              JavaScript runtime that enables fast and scalable server-side applications with non-blocking architecture.

                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-data">
                <div className="row no-gutters pt-5 border-top">
                  <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                    <div className="media">
                      <i className="fas fa-mug-hot icon-18 mr-2"></i>
                      <div className="media-body">
                        <p className="data-number m-0 font-weight-bold">10,950</p>
                        <p className="m-0 text-uppercase">Cups of coffee</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                    <div className="media">
                      <i className="fas fa-code icon-18 mr-2"></i>
                      <div className="media-body">
                        <p className="data-number m-0 font-weight-bold">
                          8,475,000
                        </p>
                        <p className="m-0 text-uppercase">Lines of code</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                    <div className="media">
                      <i className="fas fa-bus icon-18 mr-2"></i>
                      <div className="media-body">
                        <p className="data-number m-0 font-weight-bold">8,214</p>
                        <p className="m-0 text-uppercase">Buses taken</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                    <div className="media">
                      <i className="far fa-smile-wink icon-18 mr-2"></i>
                      <div className="media-body">
                        <p className="data-number m-0 font-weight-bold">3,165</p>
                        <p className="m-0 text-uppercase">Awkward winks</p>
                      </div>
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

export default AboutUs;
