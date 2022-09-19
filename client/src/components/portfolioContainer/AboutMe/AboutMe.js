import React from "react";
import ScreenHeading from "../../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../../utilities/ScrollService";
import Animations from "../../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.CurrentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Full stack web Developer and MERN stack skills in React js, react redux, next js, rsjx, python django, flask, Machine learning and deep learning, unity, c#.",
    highlights: {
      bullets: [
        "Full stack Web and Mobile development",
        "Interactive Front End as per the design",
        "React and React Native",
        "Redux for state Management",
        "Building REST APIs with django, flask & fastAPI",
        "Data Science and Machine learning",
        "Tutoring",
      ],

      heading: "Here are a Few Highlights!",
    },
  };

  const renderHighlights = () => {
    SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob">
          <span>{value}</span>
        </div>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile">
            <div className="about-me-details">
              <span className="about-me-description">
                {SCREEN_CONSTANTS.description}
              </span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                </div>
                {renderHighlights()}
              </div>
              <div className="about-me-options">
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
          </div>
        </div>
      </div>
    </div>
  );
}
