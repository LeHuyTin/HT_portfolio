import React, { useState } from "react";
import "./Portfolio.css";
import Project1 from "../../assets/project1.png";
import p1d1 from "../../assets/project1_d1.png";
import p1d2 from "../../assets/project1_d2.png";
import p1d3 from "../../assets/project1_d3.png";
import p1d4 from "../../assets/project1_d4.png";
import Project2 from "../../assets/project2.png";
import p2d1 from "../../assets/project2_d1.png";
import p2d2 from "../../assets/project2_d2.png";
import p2d3 from "../../assets/project2_d3.png";
import p2d4 from "../../assets/project2_d4.png";
import p2d5 from "../../assets/project2_d5.png";
import p2d6 from "../../assets/project2_d6.png";
import p2d7 from "../../assets/project2_d7.png";
import p2d8 from "../../assets/project2_d8.png";
import ProjectDetail from "./ProjectDetail";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Recipes Chatbot",
      description:
        "AI-powered chatbot for recipe recommendations and cooking tips",
      image: Project1,
      github: "https://github.com/LeHuyTin/AI-F",
      technologies: ["Python", "NLP", "ReactJS", "MongoDB"],
      fullDescription:
        "An intelligent chatbot that helps users discover recipes and can also look up dishes based on available ingredients. Uses natural language processing to understand user queries and provide accurate dish and recipe recommendations.",
      features: [
        "Natural language processing for user queries",
        "Recipe recommendations based on ingredients",
        "Recipe search by image recognition",
        "Step-by-step cooking instructions",
        "Speech-to-text input for hands-free cooking",
        "User-friendly interface with React",
        "Integration with a comprehensive recipe database",
      ],
      detailedDescription: [
        "Developed a full stack AI-powered chatbot individually in 6 weeks",
        "Utilized advanced NLP to understand and answer diverse cooking and recipe queries",
        "Users can get recipe suggestions based on available ingredients and step-by-step instructions",
        "Implemented speech-to-text for hands-free operation and image recognition for dish identification",
        "Designed and built both backend and frontend, including a custom recipe database",
        "Deployed a scalable, production-ready solution using Python, React, MongoDB, and cloud services",
        "Gained deep experience in AI product development, deployment, and user experience optimization",
      ],
      screenshots: [p1d1, p1d2, p1d3, p1d4],
    },
    {
      id: 2,
      title: "Charity Website",
      description:
        "A modern charity website for connecting donors and volunteers.",
      image: Project2,
      github: "https://github.com/LeHuyTin/Charity-Website",
      technologies: ["HTML & CSS", "Spring Boot", "JavaScript"],
      fullDescription:
        "This charity website is designed to help non-profit organizations connect with donors and volunteers efficiently. Built with HTML, CSS, Java, and JavaScript, the platform allows users to browse charity campaigns, make secure donations, and register as volunteers. The site features a clean, responsive design and an easy-to-use interface to encourage community engagement and support for various causes.",
      features: [
        "Accessible web design",
        "Campaign listing and detailed campaign pages",
        "Online donation system with test payment by VNPay",
        "Admin dashboard for managing campaigns, donations, users",
        "News and updates section for charity activities",
        "Contact form for inquiries and support",
      ],
      detailedDescription: [
        "Collaborated in a team to build a modern charity website; responsible for all frontend development",
        "Platform connects non-profits with donors and volunteers via a responsive, accessible UI",
        "Built reusable React components and ensured cross-browser compatibility",
        "Worked closely with backend team to integrate real-time campaign data and user authentication",
        "Implemented accessibility best practices and intuitive navigation",
        "Designed engaging layouts to encourage community participation",
        "Enhanced teamwork, communication, and large-scale web application skills through agile workflows",
      ],
      screenshots: [p2d1, p2d2, p2d3, p2d4, p2d5, p2d6, p2d7, p2d8],
    },
    // {
    //   id: 3,
    //   title: "Task Management App",
    //   description: "Collaborative task management tool with real-time updates",
    //   image: "/images/project3-demo.jpg",
    //   github: "https://github.com/yourusername/project3",
    //   technologies: ["Vue.js", "Firebase", "CSS3"],
    //   fullDescription:
    //     "A collaborative task management application that enables teams to organize, track, and complete projects efficiently. Features real-time synchronization, team collaboration tools, and project analytics.",
    //   features: [
    //     "Real-time task synchronization",
    //     "Team collaboration and assignment",
    //     "Project timeline and milestone tracking",
    //     "File attachment and commenting system",
    //     "Progress analytics and reporting",
    //     "Custom project templates",
    //     "Mobile-responsive interface",
    //   ],
    //   challenges:
    //     "Implementing real-time synchronization across multiple users, designing an intuitive interface for complex project management features, and ensuring data consistency in collaborative environments.",
    //   screenshots: [
    //     "/images/project3-screenshot1.jpg",
    //     "/images/project3-screenshot2.jpg",
    //     "/images/project3-screenshot3.jpg",
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Weather Dashboard",
    //   description:
    //     "Beautiful weather dashboard with detailed forecasts and maps",
    //   image: "/images/project4-demo.jpg",
    //   github: "https://github.com/yourusername/project4",
    //   technologies: ["React", "API", "Chart.js"],
    //   fullDescription:
    //     "A comprehensive weather dashboard that provides detailed weather information, forecasts, and interactive maps. Features beautiful data visualizations and location-based weather alerts.",
    //   features: [
    //     "Current weather conditions display",
    //     "7-day weather forecast",
    //     "Interactive weather maps",
    //     "Weather alerts and notifications",
    //     "Historical weather data charts",
    //     "Multiple location tracking",
    //     "Customizable dashboard widgets",
    //   ],
    //   challenges:
    //     "Integrating multiple weather APIs for comprehensive data, creating responsive data visualizations, and implementing accurate location-based services while maintaining good performance.",
    //   screenshots: [
    //     "/images/project4-screenshot1.jpg",
    //     "/images/project4-screenshot2.jpg",
    //     "/images/project4-screenshot3.jpg",
    //   ],
    // },
  ];

  const handleDetailClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
    );
  }

  return (
    <div id="my-project" className="portfolio-section">
      <div className="portfolio-header">
        <motion.h1
          className="portfolio-title"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="portfolio-subtitle"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          View my latest projects and creative solutions. Each project
          represents a unique challenge and learning experience.
        </motion.p>
      </div>

      <motion.div
        className="portfolio-container"
        initial={{ scale: 0.7, opacity: 0, y: 200 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="projects-scroll">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + idx * 0.15,
                ease: "easeOut",
              }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`${project.title} Demo`}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    <button
                      onClick={() => handleDetailClick(project)}
                      className="project-link detail-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                      </svg>
                      Detail
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
