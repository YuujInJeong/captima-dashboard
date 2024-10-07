import React, { useState, useMemo } from 'react';
import SalesChart from '../components/Dashboard/SalesChart';
import { calculateKPIs, generateMockData } from '../utils/dataUtils';

const Analysis = () => {
  const [timeRange, setTimeRange] = useState('all');
  
  // 모의 데이터 생성
  const salesData = useMemo(() => generateMockData(), []);

  const filteredData = useMemo(() => {
    if (timeRange === 'all') return salesData;
    const now = new Date();
    const pastDate = new Date(now.setMonth(now.getMonth() - parseInt(timeRange)));
    return salesData.filter(item => new Date(item.date) >= pastDate);
  }, [salesData, timeRange]);

  const kpis = useMemo(() => calculateKPIs(filteredData), [filteredData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">판매 데이터 분석</h1>
      
      <div className="mb-4">
        <label htmlFor="timeRange" className="mr-2">시간 범위:</label>
        <select 
          id="timeRange" 
          value={timeRange} 
          onChange={(e) => setTimeRange(e.target.value)}
          className="border rounded p-1"
        >
          <option value="all">전체</option>
          <option value="12">최근 12개월</option>
          <option value="6">최근 6개월</option>
          <option value="3">최근 3개월</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">총 매출</h2>
          <p className="text-2xl">{kpis.totalSales.toLocaleString()} 원</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">평균 주문 금액</h2>
          <p className="text-2xl">{kpis.averageOrderValue.toLocaleString()} 원</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">목표 달성률</h2>
          <p className="text-2xl">{kpis.targetAchievementRate.toFixed(2)}%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">일평균 매출</h2>
          <p className="text-2xl">{kpis.averageDailySales.toLocaleString()} 원</p>
        </div>
      </div>

      <SalesChart data={filteredData} />
    </div>
  );
};

export default Analysis;