// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const URL = 'mongodb://localhost:27017/examprep'
// mongoose.connect(URL)
//     .then(() => {
//         console.log("Successfully Connected")
//     })
//     .catch((er) => {
//         console.log(`Error is ${er}`)
//     })
// // apis started
// app.use('/api/examinee', require('./routes/examineeRoute'))
// // admin apis started
// app.use('/api/admin', require('./routes/adminRoute'));
// // session api  
// app.use('/api/session/', require('./routes/sessionRoute'))
// app.use('/api/subject/', require('./routes/subjectRoute'))
// // question route api
// app.use('/api/question/', require('./routes/questionRoute'))
// // exam api
// app.use('/api/exams/', require('./routes/examinationRoute'));
// // msg api
// app.use('/api/message', require('./routes/messageRoute'))
// // apis ended

// app.listen(5000, () => {
//     console.log("Server Connected on http://localhost:5000");



// })


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log(`❌ Error: ${err}`));

// APIs
app.use('/api/examinee', require('./routes/examineeRoute'));
app.use('/api/admin', require('./routes/adminRoute'));
app.use('/api/session', require('./routes/sessionRoute'));
app.use('/api/subject', require('./routes/subjectRoute'));
app.use('/api/question', require('./routes/questionRoute'));
app.use('/api/exams', require('./routes/examinationRoute'));
app.use('/api/message', require('./routes/messageRoute'));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
