import React, { useState } from "react";
import "./Contact.css";
import { useToast } from "../toastContext";
import emailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/phone.png";
import addressIcon from "../../assets/location.png";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const { showToast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast({
        message: "Please fill in all fields!",
        type: "error",
        duration: 2000,
      });
      return;
    }

    const submitData = new FormData();
    submitData.append("name", name);
    submitData.append("email", email);
    submitData.append("message", message);
    submitData.append("access_key", "76d3cace-e278-43a4-86f1-f956912d1506");

    const object = Object.fromEntries(submitData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        // Show success animation
        setShowSuccess(true);
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success animation after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        showToast({
          message: "Failed to send message.",
          type: "error",
          duration: 2000,
        });
      }
    } catch (error) {
      showToast({
        message: "Failed to send message.",
        type: "error",
        duration: 2000,
      });
    }
  };

  const SuccessAnimation = () => (
    <motion.div 
      className="success-container"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >      <div className="success-circle">
        <svg 
          className="checkmark" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 52 52"
        >
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#fc4a1a", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "#f7b733", stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <circle 
            className="checkmark-circle" 
            cx="26" 
            cy="26" 
            r="25" 
            fill="none"
            stroke="url(#gradientStroke)"
          />
          <path 
            className="checkmark-check" 
            fill="none" 
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
            stroke="url(#gradientStroke)"
          />
        </svg>
      </div>
      <p className="success-text">Thanks for your message!</p>
    </motion.div>
  );

  return (
    <motion.div
      className="about-left-text"
      initial={{ scale: 0.7, opacity: 0, y: 200 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div id="contact" className="contact">
        <div className="contact-section">
          <AnimatePresence mode="wait">
            {showSuccess ? (
              <SuccessAnimation key="success" />
            ) : (
              <motion.div 
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '100px', 
                  width: '100%', 
                  justifyContent: 'center' 
                }}
              >
                <motion.div 
                  className="contact-left"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.h1
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  >
                    Let's talk
                  </motion.h1>
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  >
                    Here is my contact information, you can reach out and I am happy
                    to reply to you anytime.
                  </motion.p>
                  <motion.div 
                    className="contact-detail"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  >
                    <img src={emailIcon} alt="Email" className="contact-icon" />
                    <p>lehuytint@gmail.com</p>
                  </motion.div>
                  <motion.div 
                    className="contact-detail"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    <img src={phoneIcon} alt="Phone" className="contact-icon" />
                    <p>+84 963 269 711</p>
                  </motion.div>
                  <motion.div 
                    className="contact-detail"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  >
                    <img src={addressIcon} alt="Address" className="contact-icon" />
                    <p>Tan Phu, Ho Chi Minh city</p>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="contact-right"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <form onSubmit={onSubmit}>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    >
                      <label>Your Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                      <label>Your Email</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                      <label>Write your message here</label>
                      <textarea
                        name="message"
                        rows="10"
                        placeholder="Enter your message here"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </motion.div>
                    <motion.button 
                      type="submit" 
                      className="contact-submit"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
