import React from 'react';
import { FaUsers, FaFileAlt, FaFilePdf, FaCertificate, FaLanguage } from 'react-icons/fa';
import "./Features.css"; // Import your CSS file
import { Link } from 'react-router-dom';

const WhatYouGet = () => {
  return (
    <div className="container">
   
      <div className="boxesTwo">
        <div className="headtitle">
          <h1>What You <span style={{ color: 'orange' }}> Get</span> </h1>
          <div className="curve" />
        </div>
        <div className="firstBoxes">
          <div className="shrinkBox1">
            <div className="box">

              <div>
                <FaUsers className="TitleIcon" /> {/* Using FaUsers component */}
              </div>
              <p className="title">In-Home Teaching</p>
              <div>
                <p>Personalized education from 1st to 10th standard delivered at your home.</p>
              </div>
            </div>
          </div>
          <div className="shrinkBox1">
            <div className="box">

              <div>
                <FaFileAlt className="TitleIcon" /> {/* Using FaFileAlt component */}
              </div>
              <p className="title">Customized Learning Plan</p>
              <div>
                <p>A tailored curriculum designed specifically for your child's learning pace.</p>
              </div>
            </div>
          </div>
          <div className="shrinkBox1">
            <div className="box">

              <div>
                <FaFilePdf className="TitleIcon" /> {/* Using FaFilePdf component */}
              </div>
              <p className="title">Study Materials</p>
              <div>
                <p>Comprehensive notes and resources for all subjects, provided in both digital and physical formats.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="firstBoxes">
          <div className="shrinkBox1">
            <div className="box">

              <div>
                <FaCertificate className="TitleIcon" /> {/* Using FaCertificate component */}
              </div>
              <p className="title">Progress Certification</p>
              <div>
                <p>Receive progress reports and certificates at the completion of each academic year.</p>
              </div>
            </div>
          </div>
          <div className="shrinkBox1">
            <div className="box">

              <p className="livepre">IN PREMIUM VERSION</p>
              <div>
                <FaUsers className="TitleIcon" /> {/* Using FaUsers component */}
              </div>
              <p className="title">Interactive Learning</p>
              <div>
                <p>Access to live Q&amp;A sessions and additional support for premium students.</p>
              </div>
            </div>
          </div>
          <div className="shrinkBox1">
            <div className="box">

              <div>
                <FaLanguage className="TitleIcon" /> {/* Using FaLanguage component */}
              </div>
              <p className="title">Bilingual Education</p>
              <div>
                <p>All subjects taught in both English and Hindi to ensure a comprehensive understanding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
            <Link to="/contact">
                <div className='sbtn'>
                <button className="BuyNow">Contact Us to Enroll</button>
                </div> 
                </Link>
    </div>
  );
}

export default WhatYouGet;
