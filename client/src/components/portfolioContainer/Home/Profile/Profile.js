import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../../utilities/ScrollService'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href="https://www.facebook.com/Delmondpro">
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href="https://www.youtube.com/delmond/">
                <i className='fa fa-youtube-square'></i>
              </a>
              <a href="https://www.twitter.com/delmond">
                <i className='fa fa-twitter-square'></i>
              </a>
              <a href="https://www.linkedin.com/delmond">
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a href="https://www.github.com/delmond147">
                <i className='fa fa-github-square'></i>
              </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello I'M <span className='highlighted-text'>Delmond</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
              {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Developer 🔴",
                    1000,
                    "Full Stack Developer 💻 ",
                    1000,
                    "Machine Learning Engineer 🌍",
                    1000,
                    "Deep learning Engineer 🚕",
                    1000,
                    "Cross Platform Developer 🌐",
                    1000,
                    "Python Developer 😎",
                    1000,
                    "JavaScript Developer 📱",
                    1000,
                    "Java Developer 😎",
                    1000,
                    "VR/AR/ER Engineer 😃",
                    1000,
                  ]}
                />
              </h1>

              <span className='profile-role-tagline'>
                Knack of building applications with front end and backend technologies.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn' 
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >Hire Me</button>
            <a href='mycv.pdf' download='Delmond mycv.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
