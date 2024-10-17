const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/patientDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Initialize express
const app = express();
app.use(bodyParser.json());

// Routes
const patientRoutes = require('./routes/patientRoutes');
const authorizationRoutes = require('./routes/authorizationRoutes');

app.use('/api/patients', patientRoutes);
app.use('/api/authorization', authorizationRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
