const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, 'users.json');

const readUsers = () => {
  try {
    const usersData = fs.readFileSync(usersFilePath);
    return JSON.parse(usersData);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
};

const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

app.post('/signup', (req, res) => {
  try {
    const { email, password } = req.body;
    const users = readUsers();
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { id: Date.now(), email, password };
    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    const users = readUsers();
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
    res.route = '/dashboard';
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
