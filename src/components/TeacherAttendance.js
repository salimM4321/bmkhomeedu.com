import React, { useState } from 'react';
import axios from 'axios';

const TeacherAttendance = () => {
  const [formData, setFormData] = useState({
    name: '',
    time: '',
    subject: '',
    date: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!formData.name || !formData.time || !formData.subject || !formData.date) {
      setError('Please fill all the fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/attendance', formData);
      setMessage(response.data.message);
      setFormData({ name: '', time: '', subject: '', date: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit attendance');
    }
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px',
        border: '2px solid #4CAF50',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>Teacher Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '12px 25px',
            cursor: 'pointer',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </form>
      {message && <p style={{ color: 'green', marginTop: '15px' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
    </div>
  );
};

export default TeacherAttendance;
