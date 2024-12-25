import React, { useState } from 'react';
import "./FAQ.css";

const FAQs = () => {
  const initialFAQState = [
    { question: 'What is BMK Home Education?', answer: 'BMK Home Education is a personalized learning service where qualified teachers provide education at home, covering all subjects from 1st to 10th standard. It is designed to offer individual attention and tailored learning to meet each student’s needs.', isOpen: false },
    { question: 'Who can join BMK Home Education?', answer: 'BMK Home Education is available for students from 1st to 10th standard. Whether a student is struggling with a particular subject or looking for a more personalized learning environment, BMK provides the right support.', isOpen: false },
    { question: 'What subjects are covered in BMK Home Education?', answer: 'BMK Home Education covers all core subjects from 1st to 10th standard, including Mathematics, Science, English, Social Studies, and more. The curriculum is aligned with educational standards to ensure comprehensive learning.', isOpen: false },
    { question: 'How does BMK Home Education work?', answer: 'Qualified teachers will visit the student’s home and provide structured learning sessions according to their grade level. The program includes regular assessments, progress tracking, and personalized support to help students succeed.', isOpen: false },
    { question: 'Will I receive progress reports?', answer: 'Yes, parents will receive regular progress reports to track the student’s performance and improvements. These reports will highlight strengths, areas for improvement, and recommendations for continued progress.', isOpen: false },
    { question: 'What is the fee structure for BMK Home Education?', answer: 'The fee for BMK Home Education varies depending on the class level and services provided. We offer flexible plans based on the number of sessions per week and the subjects covered. For detailed pricing, please contact us directly.', isOpen: false },
    { question: 'How can I enroll my child in BMK Home Education?', answer: 'To enroll your child in BMK Home Education, please visit our website and fill out the registration form. You can also contact us directly for more information and to schedule a consultation.', isOpen: false },
  ];

  const [faqItems, setFAQItems] = useState(initialFAQState);

  const toggleFAQ = (index) => {
    setFAQItems((prevItems) => {
      return prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }));
    });
  };

  return (
    <>
      <div className='mainfaq' id='FAQ'>
        <div className='faqtext'>
          <h2>BMK Home Education <span style={{color:'orange'}}> FAQs</span></h2>
        </div>
        {faqItems.map((item, index) => (
          <div key={index} className={`faq-item ${item.isOpen ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="question">
              <span className="text">{item.question}</span>
              <span className={`arrow ${item.isOpen ? 'open' : ''}`}>{item.isOpen ? '▼' : '▲'}</span>
            </div>
            {item.isOpen && (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default FAQs;
