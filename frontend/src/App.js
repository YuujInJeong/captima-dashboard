import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Layout/Footer';
import Analysis from './pages/Analysis';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/분석" element={<Analysis />} />
            <Route path="/소개" element={<About />} />
            <Route path="/문의" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;