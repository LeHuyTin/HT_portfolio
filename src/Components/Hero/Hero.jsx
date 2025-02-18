import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Le Huy Tin,</span> software engineer in VietNam.
      </h1>
      <p>
        I'm a software engineer living in Ho Chi Minh City. specializing in
        building (and occasionally designing) exceptional websites,
        applications, and everything in between.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
