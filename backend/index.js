const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


mongoose.connect('mongodb://localhost:27017/patientDB', {
  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const app = express();


app.use(cors());
app.use(bodyParser.json()); 


const patientRoutes = require('./routes/patientRoutes'); 
app.use('/api/patients', patientRoutes);

const authorizationRoutes = require('./routes/authorizationRoutes'); 
app.use('/api/authorization-requests', authorizationRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
