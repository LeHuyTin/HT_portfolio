import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import profile_img2 from "../../assets/profile_img2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [fadeState, setFadeState] = useState("fade-in");
  const navigate = useNavigate();

  useEffect(() => {
    const imageSwitchInterval = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setShowFirstImage((prev) => !prev);
        setFadeState("fade-in");
      }, 300);
    }, 3000);

    return () => clearInterval(imageSwitchInterval);
  }, []);

  return (
    <div id="home" className="hero">
      <div className="hero-left">
        <motion.div
          className="about-para"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span>I'm Le Huy Tin,</span> software engineer.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            I'm a software engineer living in Ho Chi Minh City. specializing in
            building (and occasionally designing) exceptional websites,
            applications, and everything in between.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Have a look at my projects!
          </motion.p>
        </motion.div>
        <motion.a
          className="portfolio"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/my-project")}
          style={{ display: "inline-block", cursor: "pointer" }}
        >
          PORTFOLIO
        </motion.a>
      </div>
      <motion.div
        className="hero-right"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`image-container ${fadeState}`}>
          {showFirstImage ? (
            <img src={profile_img} alt="Profile" className="image" />
          ) : (
            <img src={profile_img2} alt="Profile 2" className="image" />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
