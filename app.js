const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Mocked user data (normally this would come from a database)
const users = {
  username: 'user1',
  password: 'password123'
};

// Routes
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple login logic
  if (username === users.username && password === users.password) {
    res.send('Login Successful!');
  } else {
    res.send('Invalid credentials, please try again.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
