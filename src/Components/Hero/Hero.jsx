import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import profile_img2 from "../../assets/profile_img2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [fadeState, setFadeState] = useState("fade-in");
  const navigate = useNavigate();
  const imgRef = useRef();

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

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 6;
    img.style.transform = `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    img.style.boxShadow =
      "0 24px 48px rgba(252,74,26,0.18), -10px 10px 15px rgba(0,0,0,0.5)";
    img.style.zIndex = 2;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = "";
    img.style.boxShadow = "";
    img.style.zIndex = "";
  };

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
            <img
              ref={imgRef}
              src={profile_img}
              alt="Profile"
              className="image"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transition:
                  "transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s cubic-bezier(.25,.8,.25,1)",
              }}
            />
          ) : (
            <img
              ref={imgRef}
              src={profile_img2}
              alt="Profile 2"
              className="image"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transition:
                  "transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s cubic-bezier(.25,.8,.25,1)",
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
