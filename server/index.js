const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use environment variable for MongoDB
const URL = process.env.MONGO_URI || 'mongodb://localhost:27017/examprep';

mongoose.connect(URL)
    .then(() => {
        console.log("✅ Successfully Connected to MongoDB Atlas");
    })
    .catch((er) => {
        console.error(`❌ MongoDB Connection Error: ${er}`);
    });

// ---------------- APIs ----------------
app.use('/api/examinee', require('./routes/examineeRoute'));
app.use('/api/admin', require('./routes/adminRoute'));
app.use('/api/session', require('./routes/sessionRoute'));
app.use('/api/subject', require('./routes/subjectRoute'));
app.use('/api/question', require('./routes/questionRoute'));
app.use('/api/exams', require('./routes/examinationRoute'));
app.use('/api/message', require('./routes/messageRoute'));

// ---------------- Server ----------------
// ⚡ Important: Use Render's dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


