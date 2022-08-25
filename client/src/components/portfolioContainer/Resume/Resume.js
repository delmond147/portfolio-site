import React, { useState } from 'react'
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../../utilities/ScrollService'
import Animations from '../../../utilities/Animations'
import './Resume.css'

const Resume = (props) => {
  // STATES
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'>
            <span>{props.heading ? props.heading : ''}</span>
            {props.fromDate && props.toDate ? (
              <div className='heading-date'>
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className='resume-sub-heading'>
            <span>{props.subHeading ? props.subHeading : ''}</span>
          </div>
          <div className='resume-heading-description'>
            <span>{props.description ? props.description : ''}</span>
          </div>
        </div>
      </div>
    )
  };


  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 40 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Django", ratingPercentage: 80 },
    { skill: "Flak", ratingPercentage: 70 },
    { skill: "Machine Learning", ratingPercentage: 65 },
    { skill: "Deep Learning", ratingPercentage: 65 },
    { skill: "Unity", ratingPercentage: 73 },
    { skill: "C#", ratingPercentage: 54 },
    { skill: "Angular JS", ratingPercentage: 40 },
    { skill: "PHP", ratingPercentage: 55 },
    { skill: "CodeIgniter", ratingPercentage: 50 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: 2022 },
      description: "A personal portfolio website that show case some ot the skill sets that I'm made off.",
      subHeading: "Technologies used: React JS, Bootstrap"
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: 2022 },
      description: "A personal portfolio website that show case some ot the skill sets that I'm made off.",
      subHeading: "Technologies used: React JS, Bootstrap"
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: 2022 },
      description: "A personal portfolio website that show case some ot the skill sets that I'm made off.",
      subHeading: "Technologies used: React JS, Bootstrap"
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: 2022 },
      description: "A personal portfolio website that show case some ot the skill sets that I'm made off.",
      subHeading: "Technologies used: React JS, Bootstrap"
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key="education">
      <ResumeHeading
        heading={"University of Bamenda Cameroon"}
        subHeading={"BACHELOR'S OF TECHNOLOGY (BTECH)"}
        fromDate={2019}
        toDate={2022}
      />

      <ResumeHeading
        heading={"Swisslink Professional Institute of business and technology"}
        subHeading={"Higher National Diploma (HND)"}
        fromDate={2019}
        toDate={2021}
      />

      <ResumeHeading
        heading={"High School"}
        subHeading={"Atlanta Bilingual Comprehensive High School"}
        fromDate={2018}
        toDate={2020}
      />
    </div>,

    <div className='resume-screen-container' key="work-experience">
      <ResumeHeading
        heading={"Oprime"}
        subHeading={"Full Stack Developer internship"}
        fromDate={2020}
        toDate={2020}
      />
      <div className='experience-description'>
        <span className='resume-description-text'>
          Worked here for a professional internship
        </span>
      </div>

      <div className='experience-description'>
        <span className='resume-description-text'>
          - Worked here for a professional internship. It for a full stack position
        </span>
        <br />
        <span className='resume-description-text'>
          - I stretch my mental capacity to develope UI as per the given designs.
        </span>
      </div>

      <div className='resume-screen-container programming-skills-container' key="programming-skills">
        {programmingSkillDetails.map((skill, index) => (
          <div className='skill-parent' key={index}>
            <div className='heading-bullet'>
              <span>{skill.skill}</span>
              <div className='skill-percentage'>
                <div style={{ width: skill.ratingPercentage + "%" }} className='active-percentage'>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>,

      <div className='resume-screen-container' key="propjects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.fromDate}
            toDate={projectsDetails.toDate}
          />
        ))}
      </div>,

      <div className='resume-screen-container' key="interest">
        <ResumeHeading
          heading="IoT"
          description="This is a technology that has to deal with connecting literally everything to a network"
        />

        <ResumeHeading
          heading="AI"
          description="This is a technology that has to deal with connecting literally everything to a network"
        />

        <ResumeHeading
          heading="Video Games"
          description="This is a technology that has to deal with connecting literally everything to a network"
        />

        <ResumeHeading
          heading="Music"
          description="I love playing instruments and I also like singing"
        />

        <ResumeHeading
          heading="Robotics"
          description="This is one of the fields in which I am very must interested because i love automation"
        />
      </div>

    </div>
  ]

  const fadeInSubscription = ScrollService.CurrentScreenFadeIn.subscribe(fadeInScreenHandler);

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div onClick={() => handleCarousal(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}>
        <img className='bullet-logo'
          src={require(`../../../assets/Resume/${bullet.logoSrc}`).default}
          alt="Oops... no internet connection" />

      </div>
    ))
  }

  const getResumeScreen = () => {
    return (
      <div style={carousalOffSetStyle.style}
        className='resume-details-carousal'>
        {resumeDetails.map((ResumeDetails) => ResumeDetails)}
      </div>
    )
  }

  return (
    <div className='resume-container screen-container fade-in' id={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icon'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>

          <div className='resume-bullet-details'>{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  )
}

export default Resume