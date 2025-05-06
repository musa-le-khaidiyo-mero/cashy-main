const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log('Server running...')
  );
}).catch(err => console.error(err));
