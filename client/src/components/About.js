import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Utkrisht Buttolia</h1>

        <h3>Web Developer</h3>
        <p>Work links</p>
        <p className="lead">
          <Link to="http://">Youtube</Link>
          <br />
          <Link to="http://">Instagram</Link>
          <br />
          <Link to="http://">FaceBook</Link>
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>

        <p>User ID : 123456789</p>
        <p>Name : Utkrisht Buttolia</p>
        <p>email : utkrishtbuttolia128@gmail.com</p>
        <p>phone : 9818758596</p>
        <p>Profession : Web developer</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="#" role="button">
            Learn more
          </Link>
        </p>
      </div>
    </div>

      {/* <div className="conatainer emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <img src="" alt="Loading" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Utkrisht Buttolia</h5>
                <h6>MERN Stack Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING:<span>1/10</span>
                </p>

                <ul className="nav nav-pills" role="tablist">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      id="home-tab"
                      data-toggle="tab"
                      to="#home"
                      role="tab"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      to="#profile"
                    >
                      Timeline
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
                id=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <Link to="">Youtube</Link> <br />
                <Link to="">LinkedIn</Link> <br />
                <Link to="">Github</Link> <br />
                <Link to="">Blogger</Link> <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="UserID">UserID</label>
                    </div>
                    <div className="col-md-6">
                      <p>43543534653464</p>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="UserName">Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Utkrisht Buttolia</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="UserEmail">Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>utkrishtbuttolia128@gmail.com</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="UserPhone">Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>9818758596</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default About;
