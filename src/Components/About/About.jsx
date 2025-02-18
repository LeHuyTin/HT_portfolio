import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <h2>Hi, I'm Le Huy Tin</h2>
            <p>
              I'm a student of K21, majoring in Software Engineering at Saigon
              University.
            </p>
            <p>
              I'm a software engineer living in Ho Chi Minh City. specializing
              in building (and occasionally designing) exceptional websites,
              applications, and everything in between.
            </p>
            <p>
              Proficient in Java, C# Experienced with .NET, React, Spring
              Boot... Strong teamwork, problem-solving, and logical thinking
              skills
            </p>
            <p>
              My passion for coding started when I was a teenager, and I've been
              hooked ever since. I aspire to grow as a software engineer,
              particularly in Application Development. I am always eager to
              learn and apply new technologies to develop optimal solutions that
              contribute to business success.
            </p>
            <p></p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>C#</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
