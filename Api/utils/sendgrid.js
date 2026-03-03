const sgMail = require("@sendgrid/mail");

function initSendGrid() {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error("Missing SENDGRID_API_KEY");
  }
  sgMail.setApiKey(apiKey);
}

async function sendEmail(message) {
  return sgMail.send(message);
}

module.exports = { initSendGrid, sendEmail };
