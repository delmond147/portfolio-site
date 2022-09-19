import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../../utilities/ScrollService";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/Delmondpro">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.youtube.com/delmond/">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.twitter.com/delmond">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="https://www.linkedin.com/delmond">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.github.com/delmond147">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'M <span className="highlighted-text">Delmond</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "MERN Stack Developer 🔴",
                    2600,
                    "Machine Learning Engineer 🌍",
                    2600,
                    "JavaScript Developer 🔴😎",
                    2600,
                    "React Developer 💻",
                    2600,
                    "React Native Developer 📱",
                    2600,
                    "Flutter Developer 📱",
                    2600,
                    "Python Developer 🔴😎",
                    2600,
                    "VR/AR/ER Enthusiast 😃",
                    2600,
                    "IoT Enthusiast 🚕",
                    2600,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front end and backend
                technologies.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="mycv.pdf" download="Delmond mycv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
