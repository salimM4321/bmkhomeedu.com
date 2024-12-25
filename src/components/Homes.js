import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import MentorImg from './Images/shivshankar_image 2.jpg';
import FAQ from './FAQ';
import Certificate from './Images/Certificate.png';
import Features from './Features';
import { FaRegCheckCircle } from "react-icons/fa";
import Batches from './Batches';
import './Homes.css';
const Homes = () => {
    return (
        <div>
            <div className='home-session-one'>
                <div className="HeadingCLass">
                    <h2>BMK <span style={{ color: 'orange' }}>Home Education</span></h2>
                    <p>BMK Home Education is designed to support students with personalized learning plans that help them excel academically.  students will gain critical skills in key subjects, with special attention to time management, interactive sessions, and comprehensive study materials.</p>
                </div>

                <Slider />

                {/* <div className='sbtn'>
                    <button className="BuyNow">Contact Us to Enroll</button>
                </div> */}
                <Link to="/contact">
                <div className='sbtn'>
                <button className="BuyNow">Contact Us to Enroll</button>
                </div> 
                </Link>
            </div>

            <Features />

            <Batches />

            <div className="Home-Session-Two">
    <div className="MainClass">
        <h2>HOME EDUCATION <span style={{ color: 'orange' }}>Highlights</span></h2>
        <div className="CourseDetails">
            <div className="MasterCourse1">
                <div className="CourseD"><div className="number">01. </div> Personalized Learning Plans for students</div>
                <div className="CourseD"><div className="number">02. </div> Interactive Doubt Solving Sessions</div>
                <div className="CourseD"><div className="number">03. </div> Education at Home – Teachers Visit Students</div>
            </div>
            <div className="MasterCourse1">
                <div className="CourseD"><div className="number">04. </div> Daily Practice and Assignments</div>
                <div className="CourseD"><div className="number">05. </div> Project-Based Learning</div>
                <div className="CourseD"><div className="number">06. </div> Regular Progress Tracking</div>
            </div>
            <div className="MasterCourse1">
                <div className="CourseD"><div className="number">07. </div> Comprehensive Curriculum for 1st to 10th Standard</div>
                <div className="CourseD"><div className="number">08. </div> Earn a Certificate of Completion</div>
                <div className="CourseD"><div className="number">09. </div> Lifetime Access to Study Materials</div>
            </div>
        </div>

        <div className="SelectedStudents">
            <h3>Our home education program has helped</h3>
            <h2>500+ Students</h2>
            <h3>succeed academically, you can be next!</h3>
        </div>

        <Link to="/contact">
                <div className='sbtn'>
                <button className="BuyNow">Contact Us to Enroll</button>
                </div> 
        </Link>
    </div>
</div>

<div className="Home-Session-Three">
    <div className="MentorClass">
        <h3>Meet Your <span style={{ color: 'orange' }}>Educator</span>, <span style={{ color: 'orange' }}>Mentor</span>, and <span style={{ color: 'orange' }}>Guide</span></h3>
        <h2>Shivshankar Mehtre</h2>
    </div>

    <div className="CoachMentor">
        <div className="Mentor">
            <img src={MentorImg} alt="Shivshankar Mehtre" className="MentorImg" />
        </div>
        <div className="MentorInfo">
            <p><strong>Hello! I’m Shivshankar Mehtre, and I’m excited to guide you through your educational journey.</strong></p>

            <p>With years of experience in education, I am passionate about helping students discover their potential through tailored learning strategies and consistent support. Together, we will make learning both enjoyable and effective, setting you up for academic success.</p>

            <p>Let's build a foundation of knowledge and skills that will empower you to achieve your goals!</p>
        </div>
    </div>

    <Link to="/contact">
                <div className='sbtn'>
                <button className="BuyNow">Contact Us to Enroll</button>
                </div> 
    </Link>
</div>


            <div className="Home-Session-Four">
                <div className="CertificateCourse">
                    <h2>Earn Your <span style={{ color: 'orange' }}>Certificate</span></h2>

                    <img src={Certificate} alt="Course Certificate" className="CertificateImg" />

                    <h3>When You Complete This Program</h3>

                    <p>Receive a ‘Certificate of Completion’ signed by me, your mentor – <strong>Shivshankar Mehtre</strong>. Share this achievement with your academic portfolio, resume, or LinkedIn profile.</p>
                </div>

                <Link to="/contact">
                <div className='sbtn'>
                <button className="BuyNow">Contact Us to Enroll</button>
                </div> 
                </Link>
            </div>

            <div className='Home-Session-Five'>
    <h2 className='Yplan'>Choose Your <span style={{ color: 'orange' }}>Plan</span></h2>
    <div className='Pricing-boxes'>
    <div className='p-box1'>
    <h2 className='premiump'>Book Free Demo</h2>
    <p>Get a sneak peek into our course with limited access to live demo sessions and key materials.</p>
    <div className='Price pr3'>₹ 0/-</div>
    <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> Live Demo Session</div>
    <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> Key PDF Materials</div>
    <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> Q&A with Mentor</div>
    <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> No Certificate</div>
</div>

        <div className='p-box1'>
            <h2>Basic Plan</h2>
            <p>Access to course notes and limited support.</p>
            <div className='Price p1'>₹ 5,000/-</div>
            <div className='pdf1'><FaRegCheckCircle className='tickmark' /> PDF Notes</div>
            <div className='pdf1'><FaRegCheckCircle className='tickmark' /> Certificate of Completion</div>
            <div className='pdf1'><FaRegCheckCircle className='tickmark' /> Limited Mentor Support</div>
        </div>

        <div className='p-box1'>
            <h2>Standard Plan</h2>
            <p>Full access to course lectures, materials, and assignments.</p>
            <div className='Price'>₹ 10,000/-</div>
            <div className='pdf1'><FaRegCheckCircle className='tickmark' /> Video Lectures</div>
            <div className='pdf1'><FaRegCheckCircle className='tickmark' /> Daily Assignments</div>
            <div className='pdf1'><FaRegCheckCircle className='tickmark' /> PDF Notes</div>
            <div className='pdf1'><FaRegCheckCircle className='tickmark' /> Certificate of Completion</div>
            <div className='pdf1'><FaRegCheckCircle className='tickmark' /> Weekly Mentor Sessions</div>
        </div>

        <div className='p-box1'>
            <h2 className='premiump'>Premium Plan</h2>
            <p>Live sessions, full course access, upgrades, and personalized mentoring.</p>
            <div className='Price pr3'>₹ 15,000/-</div>
            <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> Video Lectures</div>
            <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> Daily Assignments</div>
            <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> PDF Notes</div>
            <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> Live Q&A Sessions</div>
            <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> Course Updates</div>
            <div className='pdf1 pdf2'><FaRegCheckCircle className='tickmark' /> Certificate of Completion</div>
           
        </div>
    </div>

    <Link to="/contact">
                <div className='sbtn'>
                <button className="BuyNow">Contact Us to Enroll</button>
                </div> 
    </Link>
</div>

            <FAQ />

            
        </div>
    );
}

export default Homes;
