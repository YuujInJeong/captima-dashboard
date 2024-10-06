// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';

const generateMockData = () => {
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-09-30');
  const data = [];
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const sales = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000; // 5000에서 10000 사이의 랜덤 값
    const target = 7500; // 고정 목표치
    data.push({
      date: currentDate.toISOString().split('T')[0],
      sales: sales,
      target: target
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};

const mockSalesData = generateMockData();

const App = () => {
  const kpis = {
    totalSales: mockSalesData.reduce((sum, day) => sum + day.sales, 0),
    averageOrderValue: Math.round(mockSalesData.reduce((sum, day) => sum + day.sales, 0) / mockSalesData.length),
    conversionRate: 3.5,
    customerRetentionRate: 75.2
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard kpis={kpis} salesData={mockSalesData} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;