// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter
import Homes from './components/Homes';
import ContactUs from './components/Contactus';
import Navbar from './components/Navbar';
import About from './components/About';
import Staff from './components/Staff';
import FAQ from './components/FAQ';
import Batches from './components/Batches';
import TeacherAttendance from './components/TeacherAttendance'; 
import Footer from './components/Footer'
import Services from './components/Services';


const App = () => {
  return (
    <>
      <Navbar /> {/* Navbar is now inside a single Router */}
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/attendance" element={<TeacherAttendance />} />
        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />

             <Route path="/" element={<Homes />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
