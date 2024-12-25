import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios'; // Add this for API calls
import './Contactus.css';

// Form validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <h2>
        Contact <span>BMK Home Education</span>
      </h2>
      <p>Email: bmkhomeedu@gmail.com</p>
      <p>Phone: +91 12345 67890</p>

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post(
              'http://localhost:5000/api/contact',
              values
            );
            console.log(response.data);
            alert('Contact information saved successfully!');
            resetForm();
          } catch (error) {
            console.error('Error saving contact information:', error);
            alert('Failed to save contact information. Please try again.');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="contact-form">
            <Field
              name="name"
              as={TextField}
              label="Name"
              variant="outlined"
              fullWidth
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              margin="normal"
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              margin="normal"
            />
            <Field
              name="message"
              as={TextField}
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              error={touched.message && !!errors.message}
              helperText={touched.message && errors.message}
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
