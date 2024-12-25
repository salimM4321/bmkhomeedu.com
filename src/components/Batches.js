import React from 'react';
import './Batches.css'; // Import CSS file
import { Link } from 'react-router-dom';

function AvailableBatches() {
  return (
    <div className="container1">
      <h2 className="Heading">Available <span style={{ color: 'orange' }}>Batches</span></h2>
      <div className="batches">
        <div className="batch">
          <div className="bat">1</div>
          <h3 className="title1">Filling Fast</h3>
          <p className="date">1st November 2024</p>
        </div>
        <div className="batch">
          <div className="bat">2</div>
          <h3 className="title1">Almost Full</h3>
          <p className="date">15th November 2024</p>
        </div>
        <div className="batch">
          <div className="bat">3</div>
          <h3 className="title1">Available</h3>
          <p className="date">1st December 2024</p>
        </div>
      </div>
      <div className="batches">
        <div className="batch">
          <div className="bat">4</div>
          <h3 className="title1">Available</h3>
          <p className="date">15th December 2024</p>
        </div>
        <div className="batch">
          <div className="bat">5</div>
          <h3 className="title1">Available</h3>
          <p className="date">1st January 2025</p>
        </div>
        <div className="batch">
          <div className="bat">6</div>
          <h3 className="title1">Available</h3>
          <p className="date">15th January 2025</p>
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

export default AvailableBatches;
