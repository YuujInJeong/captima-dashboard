import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import SalesAnalysis from './components/SalesAnalysis/SalesAnalysis';
function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales-analysis" element={<SalesAnalysis />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;