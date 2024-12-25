const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/bmkhomeedu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose Schemas
const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  subject: { type: String, required: true },
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Models
const Attendance = mongoose.model('Attendance', attendanceSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Routes

// Attendance Route
app.post('/api/attendance', async (req, res) => {
  try {
    const { name, time, date, subject } = req.body;
    console.log('Received Attendance Data:', { name, time, date, subject }); // Log data received
    const newAttendance = new Attendance({ name, time, date, subject });
    await newAttendance.save();
    console.log('Attendance Data Saved:', newAttendance); // Log saved data
    res.status(200).json({ message: 'Attendance saved successfully!' });
  } catch (error) {
    console.error('Error saving attendance:', error); // Log error details
    res.status(500).json({ message: 'Failed to save attendance', error });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Received Contact Data:', { name, email, message }); // Log data received
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log('Contact Data Saved:', newContact); // Log saved data
    res.status(200).json({ message: 'Contact details saved successfully!' });
  } catch (error) {
    console.error('Error saving contact details:', error); // Log error details
    res.status(500).json({ message: 'Failed to save contact details', error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
