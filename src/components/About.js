// src/components/AboutUs.js

import React, { useState } from 'react';
import './About.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      
      <Accordion title="Welcome to BMK Home Education">
        <p>
          At <strong>BMK Home Education</strong>, we believe that education is the cornerstone...
        </p>
      </Accordion>
      
      <Accordion title="Our Vision">
        <p>
          To revolutionize home-based education by integrating innovative teaching methodologies...
        </p>
      </Accordion>
      
      <Accordion title="Our Mission">
        <ul>
          <li><strong>Personalized Learning:</strong> Tailoring educational experiences...</li>
          <li><strong>Accessible Education:</strong> Breaking geographical and financial barriers...</li>
          <li><strong>Holistic Development:</strong> Focusing on emotional and social well-being...</li>
          <li><strong>Innovative Teaching:</strong> Utilizing the latest educational technologies...</li>
        </ul>
      </Accordion>
      
      <Accordion title="Why Choose Us?">
        <ul>
          <li><strong>Experienced Educators:</strong> Dedicated and highly qualified teachers...</li>
          <li><strong>Flexible Curriculum:</strong> Customizable schedules to fit your lifestyle...</li>
          <li><strong>Interactive Learning:</strong> Leveraging interactive tools and platforms...</li>
          <li><strong>Supportive Community:</strong> Building a strong support system...</li>
        </ul>
      </Accordion>
      
      <Accordion title="Our Programs">
        <ul>
          <li><strong>K-12 Education:</strong> Comprehensive programs covering all subjects...</li>
          <li><strong>Test Preparation:</strong> Specialized coaching for standardized tests...</li>
          <li><strong>Skill Development:</strong> Courses designed to enhance critical skills...</li>
          <li><strong>Extracurricular Activities:</strong> Opportunities for students to explore...</li>
        </ul>
      </Accordion>
      
      <Accordion title="Join Our Family">
        <p>
          Embark on a transformative educational journey with BMK Home Education...
        </p>
      </Accordion>
    </div>
  );
};

export default AboutUs;
