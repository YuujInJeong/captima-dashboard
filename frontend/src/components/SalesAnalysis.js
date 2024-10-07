import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 임시 데이터 생성 함수
const generateData = (days) => {
  const data = [];
  for (let i = 0; i < days; i++) {
    data.push({
      date: `2024-${String(Math.floor(i / 30) + 1).padStart(2, '0')}-${String(i % 30 + 1).padStart(2, '0')}`,
      sales: Math.floor(Math.random() * 5000) + 5000,
    });
  }
  return data;
};

const salesData = generateData(180);

const calculateMovingAverage = (data, days) => {
  return data.map((item, index, array) => {
    if (index < days - 1) return { ...item, [`MA${days}`]: null };
    const slice = array.slice(index - days + 1, index + 1);
    const sum = slice.reduce((acc, curr) => acc + curr.sales, 0);
    return { ...item, [`MA${days}`]: sum / days };
  });
};

const SalesChart = ({ data }) => {
  const [showMA60, setShowMA60] = useState(false);
  const [showMA30, setShowMA30] = useState(false);

  const processedData = React.useMemo(() => {
    let result = data;
    if (showMA60) result = calculateMovingAverage(result, 60);
    if (showMA30) result = calculateMovingAverage(result, 30);
    return result;
  }, [data, showMA60, showMA30]);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">판매 추이</h2>
      <div className="mb-4">
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            className="form-checkbox text-blue-600"
            checked={showMA60}
            onChange={(e) => setShowMA60(e.target.checked)}
          />
          <span className="ml-2">60일 이동평균</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-green-600"
            checked={showMA30}
            onChange={(e) => setShowMA30(e.target.checked)}
          />
          <span className="ml-2">30일 이동평균</span>
        </label>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" name="일일 판매량" stroke="#3b82f6" strokeWidth={2} />
          {showMA60 && (
            <Line type="monotone" dataKey="MA60" name="60일 이동평균" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
          )}
          {showMA30 && (
            <Line type="monotone" dataKey="MA30" name="30일 이동평균" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const KPICard = ({ title, value, unit, change }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
    <p className="text-3xl font-bold mt-2">
      {value.toLocaleString()} {unit}
    </p>
    <p className={`text-sm mt-2 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
      {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% 전월 대비
    </p>
  </div>
);

const SalesAnalysis = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">농심 새우깡 판매 분석</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KPICard title="월 평균 판매량" value={2082446} unit="개" change={3.5} />
        <KPICard title="평균 판매가" value={7600} unit="원" change={-1.2} />
        <KPICard title="월 매출액" value={15826789600} unit="원" change={2.3} />
      </div>
      
      <SalesChart data={salesData} />
      
      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">판매 인사이트</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>지난 달 대비 판매량이 3.5% 증가했습니다. 이는 계절적 요인과 최근 마케팅 캠페인의 영향으로 보입니다.</li>
          <li>평균 판매가는 소폭 하락했지만, 전체 매출은 증가했습니다. 이는 판매량 증가가 가격 하락을 상쇄했음을 의미합니다.</li>
          <li>60일 이동평균선을 보면, 전반적인 판매 추세가 상승세임을 알 수 있습니다.</li>
          <li>30일 이동평균선의 변동성이 더 큰 것으로 보아, 단기적으로는 판매량 변동이 있지만 장기적으로는 안정적인 성장세를 보이고 있습니다.</li>
        </ul>
      </div>
    </div>
  );
};

export default SalesAnalysis;