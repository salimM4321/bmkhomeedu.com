import React from 'react';
import './staff.css';
import AshwiniImage from './Images/Ashwini.jpg';
import SwatiImage from './Images/Swati.jpg';
import Sudharani from './Images/Sudharani.jpg';
import Surekha from './Images/Surekha.jpg';
import Mamta from './Images/Mamta.jpg';
import Panchshila from './Images/Panchshila.jpg';
import Rani from './Images/Rani.jpg';
import Bhagyshree from './Images/Bhagyshree.jpg';
import Sweta from './Images/Sweta.jpg';


// Import other images as needed

const Staff = () => {
  const staffMembers = [
    {
      imageSrc: SwatiImage,
      name: 'Swati Kamble',
      position: 'Manager', // Add appropriate position
      identityNo: 'UOF8693350', // Example Identity No
      mobile: '9743313297', // Example mobile number
      email: 'swittykamble9353@gmail.com', // Example email
      address: 'B. Kalyan, Bidar - 585437',
    },
    {
      imageSrc: AshwiniImage,
      name: 'Ashwini Jogi',
      position: 'Manager Group',
      identityNo: 'XOJ9340621', // Example Identity No
      mobile: '8904716271', // Example mobile number
      // email: 'ashwini@example.com', // Example email
      address: 'B. Kalyan, Bidar - 585437', // Example address
      
    },
    {
      imageSrc: Sudharani,
      name: 'Sudharani Sontakke',
      position: 'Science Teacher',
      identityNo: '67890', // Example Identity No
      mobile: '555-555-5555', // Example mobile number
      email: 'jane@example.com', // Example email
      address: 'Another Address', // Example address
      
    
    },
    {
      imageSrc: Surekha,
      name: 'Surekha Gobade',
      position: 'Science Teacher',
      identityNo: '67890', // Example Identity No
      mobile: '555-555-5555', // Example mobile number
      email: 'jane@example.com', // Example email
      address: 'Another Address', // Example address
      
    },
    {
      imageSrc: Mamta,
      name: 'Mamta Biradar',
      position: 'Science Teacher',
      identityNo: '67890', // Example Identity No
      mobile: '555-555-5555', // Example mobile number
      email: 'jane@example.com', // Example email
      address: 'Another Address', // Example address
      
    },
    {
      imageSrc: Panchshila,
      name: 'Panchashila kamble',
      position: 'Science Teacher',
      identityNo: '67890', // Example Identity No
      mobile: '555-555-5555', // Example mobile number
      email: 'jane@example.com', // Example email
      address: 'Another Address', // Example address
      
    },
    {
      imageSrc: Rani,
      name: 'Rani Kamble',
      position: 'Science Teacher',
      identityNo: '67890', // Example Identity No
      mobile: '555-555-5555', // Example mobile number
      email: 'jane@example.com', // Example email
      address: 'Another Address', // Example address
      
    },
    {
      imageSrc: Bhagyshree,
      name: 'Bhagyshree',
      position: 'Science Teacher',
      identityNo: '67890', // Example Identity No
      mobile: '555-555-5555', // Example mobile number
      email: 'jane@example.com', // Example email
      address: 'Another Address', // Example address
      
    },
    {
      imageSrc: Sweta,
      name: 'Swta',
      position: 'Science Teacher',
      identityNo: '67890', // Example Identity No
      mobile: '555-555-5555', // Example mobile number
      email: 'jane@example.com', // Example email
      address: 'Another Address', // Example address
      
    },

    
  
    // Add more staff members as needed
  ];

  return (
    <div className="staff-list">
      {staffMembers.map((staff, index) => (
        <div key={index} className="staff-container">
          <div className="staff-image">
            <img src={staff.imageSrc} alt={staff.name} />
          </div>
          <div className="staff-info">
            <h2 className="staff-name">{staff.name}</h2>
            <h4 className="staff-position">{staff.position}</h4>
            {staff.description && <p className="staff-description">{staff.description}</p>}
            <div className="staff-details">
              <p className="staff-identity">Identity No: {staff.identityNo}</p>
              <p className="staff-mobile">Mobile: {staff.mobile}</p>
              <p className="staff-email">Email: {staff.email}</p>
              <p className="staff-address">Address: {staff.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staff;
