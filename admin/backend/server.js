const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

console.log('🚀 Server starting...');

app.use(cors());
app.use(express.json());

// Path to users.json
const usersFilePath = path.join(__dirname, '..', 'public', 'users.json');
console.log('📁 Users file path:', usersFilePath);

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// GET users
app.get('/api/users', (req, res) => {
  try {
    console.log('📥 Getting users...');
    
    if (!fs.existsSync(usersFilePath)) {
      console.log('📁 File not found, creating default...');
      const defaultUsers = [
        {
          id: 1,
          name: "John Doe",
          role: "admin",
          email: "admin@gmail.com",
          phone: "9876543210",
          password: "1234"
        }
      ];
      const publicDir = path.join(__dirname, '..', 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
      }
      fs.writeFileSync(usersFilePath, JSON.stringify(defaultUsers, null, 2));
      return res.json(defaultUsers);
    }
    
    const data = fs.readFileSync(usersFilePath, 'utf8');
    const users = JSON.parse(data);
    console.log('✅ Users loaded:', users.length);
    res.json(users);
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// POST users
app.post('/api/users', (req, res) => {
  try {
    const users = req.body;
    console.log('💾 Saving users:', users.length);
    
    if (!Array.isArray(users)) {
      return res.status(400).json({ error: 'Invalid data format' });
    }
    
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }
    
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    console.log('✅ Users saved!');
    res.json({ success: true });
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log('🗑️ Deleting user:', id);
    
    const data = fs.readFileSync(usersFilePath, 'utf8');
    const users = JSON.parse(data);
    const updatedUsers = users.filter(user => user.id !== id);
    fs.writeFileSync(usersFilePath, JSON.stringify(updatedUsers, null, 2));
    console.log('✅ User deleted!');
    res.json({ success: true });
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📁 Users file: ${usersFilePath}`);
});

console.log('📦 Server setup complete!');