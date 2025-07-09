import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// API routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Sample API endpoints for the financial app
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1', price: 100, stock: 50 },
    { id: 2, name: 'Product 2', price: 200, stock: 30 }
  ]);
});

app.get('/api/transactions', (req, res) => {
  res.json([
    { id: 1, type: 'income', amount: 1000, description: 'Sale', date: new Date().toISOString() },
    { id: 2, type: 'expense', amount: 500, description: 'Purchase', date: new Date().toISOString() }
  ]);
});

// Serve static files from the client build directory
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist/public')));
  
  // Serve React app for all other routes in production
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/public/index.html'));
  });
} else {
  // Development mode - let Vite handle the frontend
  app.get('/', (req, res) => {
    res.json({ 
      message: 'API server running in development mode',
      frontend: 'Served by Vite dev server'
    });
  });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  
  if (process.env.NODE_ENV !== 'production') {
    console.log(`⚡ Frontend will be served by Vite dev server`);
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});