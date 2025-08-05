// import express from 'express';
// const app = express();

// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT} and the site is hosted at http://localhost:${PORT}`);
// }).on('error', (err) => {
//   if (err.code === 'EADDRINUSE') {
//     console.error(`Port ${PORT} is already in use. Please try a different port or kill the process using this port.`);
//     console.error('You can run: lsof -ti:3000 | xargs kill -9');
//   } else {
//     console.error('Server error:', err);
//   }
//   process.exit(1);
// });

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} and the site is hosted at http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try a different port or kill the process using this port.`);
    console.error('You can run: lsof -ti:3000 | xargs kill -9');
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

// Graceful shutdown for nodemon restarts
function shutdown() {
  server.close(() => {
    console.log('Server closed gracefully');
    process.exit(0);
  });
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);