import React from 'react';
import { calculateKPIs, generateMockData } from '../../utils/dataUtils';
import KPICard from './KPICard';
import FileUpload from './FileUpload';
import ChatbotInput from './ChatbotInput';
import SalesChart from './SalesChart';

const Dashboard = () => {
  const salesData = generateMockData();
  const kpis = calculateKPIs(salesData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">농심 새우깡 판매 대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard title="총 판매량" value={kpis.totalSales} unit="개" />
        <KPICard title="평균 주문 가치" value={kpis.averageOrderValue} unit="원" />
        <KPICard title="목표 달성률" value={kpis.targetAchievementRate.toFixed(2)} unit="%" />
        <KPICard title="일평균 판매량" value={kpis.averageDailySales} unit="개" />
      </div>
      <FileUpload />
      <ChatbotInput />
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">일별 판매량 추이</h2>
        <SalesChart data={salesData} />
      </div>
    </div>
  );
};

export default Dashboard;