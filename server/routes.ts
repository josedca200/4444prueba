import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

// Health check
router.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Sample data for development
const sampleProducts = [
  { id: '1', name: 'Laptop Dell', description: 'High performance laptop', priceUsd: '999.99', stock: 15, category: 'electronics' },
  { id: '2', name: 'Office Chair', description: 'Ergonomic office chair', priceUsd: '299.99', stock: 8, category: 'furniture' },
  { id: '3', name: 'Wireless Mouse', description: 'Bluetooth wireless mouse', priceUsd: '49.99', stock: 25, category: 'electronics' }
];

const sampleTransactions = [
  { id: '1', type: 'income', amount: '2500.00', currency: 'USD', description: 'Product sales', category: 'sales', date: new Date().toISOString() },
  { id: '2', type: 'expense', amount: '800.00', currency: 'USD', description: 'Office supplies', category: 'supplies', date: new Date().toISOString() },
  { id: '3', type: 'income', amount: '1200.00', currency: 'USD', description: 'Service revenue', category: 'services', date: new Date().toISOString() }
];

// Products endpoints
router.get('/products', (req: Request, res: Response) => {
  res.json(sampleProducts);
});

router.post('/products', (req: Request, res: Response) => {
  const newProduct = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  res.status(201).json(newProduct);
});

// Transactions endpoints
router.get('/transactions', (req: Request, res: Response) => {
  res.json(sampleTransactions);
});

router.post('/transactions', (req: Request, res: Response) => {
  const newTransaction = {
    id: Date.now().toString(),
    ...req.body,
    date: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  res.status(201).json(newTransaction);
});

// Dashboard stats
router.get('/dashboard/stats', (req: Request, res: Response) => {
  const totalProducts = sampleProducts.length;
  const totalStock = sampleProducts.reduce((sum, product) => sum + product.stock, 0);
  const totalRevenue = sampleTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);
  const totalExpenses = sampleTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  res.json({
    totalProducts,
    totalStock,
    totalRevenue,
    totalExpenses,
    netProfit: totalRevenue - totalExpenses
  });
});

export default router;