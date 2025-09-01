const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Examination', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  score: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  passed: { type: Boolean, required: true },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
      selectedAnswer: { type: String },
      correctAnswer: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Result', ResultSchema);