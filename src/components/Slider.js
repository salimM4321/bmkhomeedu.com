import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import CSS file for styling

const Slider = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to switch to the next video
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Effect to handle auto sliding
  useEffect(() => {
    const interval = setInterval(nextVideo, 5000); // Change interval as needed
    return () => clearInterval(interval);
  }, []); // Runs only once

  return (
    <div className="slider-container">
      <div className="video-slider" style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}>
        {videos.map((video, index) => (
          <div key={index} className="slide">
            <iframe
              src={video}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className='VideoHeight'
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const videos = [
    "https://www.youtube.com/embed/Vax9_qYPkBA?si=633r5KWsIkade3Wy",
    "https://www.youtube.com/embed/DH0QnqGt6HE?si=kHeJzh91NRYtMESq",
    "https://www.youtube.com/embed/nk66j3PlCYE?si=zdnkK53lIeWyR_M1",
    "https://www.youtube.com/embed/Vax9_qYPkBA?si=633r5KWsIkade3Wy",
    "https://www.youtube.com/embed/DH0QnqGt6HE?si=kHeJzh91NRYtMESq",
    // "https://www.youtube.com/embed/NNSHu0rkew8?si=Q2yE5idT9NbQ8-d2"
  ];

  return (
    <div className="App">
      <Slider videos={videos} />
    </div>
  );
};

export default App;
