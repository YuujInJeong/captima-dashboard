// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // 정적 데이터
// const salesData = [
//   { date: '2024-01', sales: 8500 },
//   { date: '2024-02', sales: 9200 },
//   { date: '2024-03', sales: 8800 },
//   { date: '2024-04', sales: 9500 },
//   { date: '2024-05', sales: 10000 },
//   { date: '2024-06', sales: 9800 },
// ];

// const SalesChart = ({ data }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4">판매 추이</h2>
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="sales" name="월별 판매량" stroke="#3b82f6" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// const KPICard = ({ title, value, unit, change }) => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
//     <p className="text-3xl font-bold mt-2">
//       {value.toLocaleString()} {unit}
//     </p>
//     <p className={`text-sm mt-2 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//       {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% 전월 대비
//     </p>
//   </div>
// );

// const SalesAnalysis = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">농심 새우깡 판매 분석</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <KPICard title="월 평균 판매량" value={2082446} unit="개" change={3.5} />
//         <KPICard title="평균 판매가" value={7600} unit="원" change={-1.2} />
//         <KPICard title="월 매출액" value={15826789600} unit="원" change={2.3} />
//       </div>
      
//       <SalesChart data={salesData} />
      
//       <div className="mt-8 bg-white p-4 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4">판매 인사이트</h2>
//         <ul className="list-disc list-inside space-y-2">
//           <li>지난 달 대비 판매량이 3.5% 증가했습니다. 이는 계절적 요인과 최근 마케팅 캠페인의 영향으로 보입니다.</li>
//           <li>평균 판매가는 소폭 하락했지만, 전체 매출은 증가했습니다. 이는 판매량 증가가 가격 하락을 상쇄했음을 의미합니다.</li>
//           <li>6개월간의 판매 추이를 보면, 전반적인 판매량이 상승세임을 알 수 있습니다.</li>
//           <li>월별 변동성이 있지만, 장기적으로는 안정적인 성장세를 보이고 있습니다.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SalesAnalysis;

const SalesAnalysis = () => {
  return (
    <div>
      <h1>판매 분석 페이지</h1>
      {/* 나머지 컨텐츠 */}
    </div>
  );
};