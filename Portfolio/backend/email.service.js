require('dotenv').config();

const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const gmail = google.gmail({
  version: 'v1',
  auth: oauth2Client
});

async function sendContactEmail(name, email, message) {

  const receiverEmail = process.env.RECEIVER_EMAIL;

  const subject = `Portfolio Contact - ${name}`;

  const emailBody = [
    `From: ${email}`,
    `To: ${receiverEmail}`,
    `Subject: ${subject}`,
    `Content-Type: text/plain; charset="UTF-8"`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message
  ].join('\r\n');

  const encodedMessage = Buffer
    .from(emailBody)
    .toString('base64url');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage
    }
  });
}

module.exports = {
  sendContactEmail
};