import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      <MDBContainer>
        <section className=" text-center text-lg-start">
          <style></style>
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/360/625/desktop-wallpaper-cristiano-ronaldo-on-twitter-ronaldo-motivation-thumbnail.jpg"
                  alt="Cr7"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example1"
                        className="form-control"

                      />
                      <label className="form-label" for="form2Example1"
                      style={{color:"black" ,border:"none"}}
                      >
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example2"
                        className="form-control"
                        style={{color:"black" ,border:"none"}}
                      />
                      <label className="form-label" for="form2Example2"
                      style={{color:"black" ,border:"none"}}
                      >
                        Password
                      </label>
                    </div>

                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example31"
                            checked
                            style={{backgroundColor:"black" ,border:"none"}}
                          />
                          <label className="form-check-label" for="form2Example31">
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      <div className="col text-dark">
                      
                        <Link  style={{color:"black" ,border:"none"}}>Forgot password?</Link>
                      </div>
                    </div>

                    <button type="button" className="btn btn-dark btn-block mb-4">
                      Sign in
                    </button>
                  </form>
                  <br />
                  <div className="fa-icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>

                    <i className="fab fa-google"></i>

                    <i className="fab fa-instagram"></i>

                    <i className="fab fa-linkedin-in"></i>

                    <i className="fab fa-pinterest"></i>

                    <i className="fab fa-vk"></i>

                    <i className="fab fa-stack-overflow"></i>

                    <i className="fab fa-youtube"></i>

                    <i className="fab fa-slack-hash"></i>

                    <i className="fab fa-github"></i>

                    <i className="fab fa-dribbble"></i>

                    <i className="fab fa-reddit-alien"></i>

                    <i className="fab fa-whatsapp"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MDBContainer>
    </div>
  );
};

export default login;
