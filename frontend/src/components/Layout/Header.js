import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-toss">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/spoter.png" alt="점쟁이" className="h-10 w-auto transform scale-120" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-toss-blue transition-colors duration-200 inline-flex items-center px-1 pt-1 text-sm font-medium">
              대시보드
            </Link>
            <Link to="/분석" className="text-gray-900 hover:text-toss-blue transition-colors duration-200 inline-flex items-center px-1 pt-1 text-sm font-medium">
              분석
            </Link>
            <Link to="/소개" className="text-gray-900 hover:text-toss-blue transition-colors duration-200 inline-flex items-center px-1 pt-1 text-sm font-medium">
              소개
            </Link>
            <Link to="/문의" className="text-gray-900 hover:text-toss-blue transition-colors duration-200 inline-flex items-center px-1 pt-1 text-sm font-medium">
              문의
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;