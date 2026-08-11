const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { google } = require('googleapis');
const { sendContactEmail } = require('./email.service');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Google OAuth client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

app.post('/api/contact', async (req, res) => {

  try {

    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required.'
      });
    }

    // Send email
    await sendContactEmail(
      name,
      email,
      message
    );

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {

    console.error('Email error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to send email.'
    });

  }
});


// Start Google OAuth
app.get('/auth/google', (req, res) => {

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/gmail.send'
    ],
    prompt: 'consent'
  });

  res.redirect(authUrl);
});

// Google OAuth callback
app.get('/oauth2/callback', async (req, res) => {

  try {

    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);

    console.log('OAuth Tokens:', tokens);

    res.send(`
      <h1>Google Authorization Successful!</h1>
      <p>Check your terminal for the refresh token.</p>
    `);

  } catch (error) {

    console.error('OAuth Error:', error);

    res.status(500).send('Google authorization failed.');

  }

});

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});