import React, { useRef } from "react";
import "./About.css";
import about_img from "../../assets/about_img.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const imgRef = useRef();
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 6;
    const transform = `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    img.style.transform = transform;
    img.style.boxShadow =
      "0 24px 48px rgba(252,74,26,0.18), -10px 10px 15px rgba(0,0,0,0.5)";
    img.style.zIndex = 2;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    img.style.transform = "";
    img.style.boxShadow = "";
    img.style.zIndex = "";
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div id="about" className="about">
      <div className="about-left">
        <motion.div
          className="about-left-text"
          initial={{ scale: 0.7, opacity: 0, y: 200 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="about-profile-card"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="profile-card">
              <img
                src={about_img}
                alt="Profile"
                ref={imgRef}
                className="profile-card-img"
                style={{
                  transition:
                    "transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s cubic-bezier(.25,.8,.25,1)",
                  display: "block",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="skill-container"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="skill-item">
            <div className="skill-bullet"></div>
            <div className="skill-name">Development</div>
          </div>
          <div className="skill-item">
            <div className="skill-bullet"></div>
            <div className="skill-name">UI/UX design</div>
          </div>
        </motion.div>
      </div>
      <div className="about-right">
        <motion.div
          className="about-para"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            My name is Le Huy Tin, and I study at Saigon University majoring in
            software engineering. <br />
            During my studies, I have participated in many software and website
            development projects where I have participated in many positions
            from interface design to writing data processing codes to ensure the
            application works completely.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            I have experience in programming languages such as Java, C#, HTML,
            TailwindCSS and Javascript. And I am also familiar with some
            frameworks such as Spring Boot, ReactJS, and NodeJS. I am always
            eager to learn new things and improve my skills.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            I live and work in Ho Chi Minh City. In my free time, I like to ride
            around and see the city on my bicycle, play billiards with friends,
            or go out to eat some of my favorite delicious food.
          </motion.p>
        </motion.div>
        <motion.div
          className="about-cv"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#" download className="cv-download-btn">
            DOWNLOAD CV
          </a>
          <span className="back-arrow">&laquo;</span>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
