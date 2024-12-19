const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Predefined time as specified
const CURRENT_TIME = '2024-12-19T21:46:39+05:30';

// Basic routes
app.get('/api/time', (req, res) => {
  res.json({ 
    currentTime: CURRENT_TIME,
    message: 'Hello from Node.js server!' 
  });
});

// Route for serving the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export for testing
module.exports = app;