const mongoose = require('mongoose');

const ContactSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 200 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 320 },
    phone: { type: String, trim: true, maxlength: 50 },
    eventDate: { type: String, required: true, trim: true, maxlength: 50 },
    guestCount: { type: String, required: true, trim: true, maxlength: 50 },
    eventType: { type: String, required: true, trim: true, maxlength: 100 },
    serviceInterest: { type: [String], required: true, default: [] },
    subject: { type: String, required: true, trim: true, maxlength: 200 },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
  },
  { timestamps: true },
);

module.exports = mongoose.model('ContactSubmission', ContactSubmissionSchema);
