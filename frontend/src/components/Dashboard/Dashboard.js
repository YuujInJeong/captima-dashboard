import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const KPICard = ({ title, value, unit }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 transition duration-300 ease-in-out hover:shadow-md">
    <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">
      {typeof value === 'number' ? value.toLocaleString('ko-KR') : value}
      <span className="text-sm font-normal text-gray-500 ml-1">{unit}</span>
    </p>
  </div>
);

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert('파일이 업로드되었습니다: ' + file.name);
      // 여기에 실제 파일 업로드 로직을 추가할 수 있습니다.
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">엑셀 파일 업로드</h2>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="file"
          onChange={handleFileChange}
          accept=".xlsx, .xls"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">업로드</button>
      </form>
    </div>
  );
};

const ChatbotInput = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('챗봇에 입력된 메시지: ' + input);
    setInput('');
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">챗봇</h2>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="챗봇에게 메시지를 입력하세요"
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">전송</button>
      </form>
    </div>
  );
};

const SalesChart = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseUp = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // 3초 후 팝업 닫기
  };

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} onMouseUp={handleMouseUp}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" name="판매량" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="target" name="목표" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      {showPopup && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg">
          <p>아직 챗봇이 연결되지 않았습니다.<br />챗봇이 관련 이슈를 요약하여 제시합니다.</p>
        </div>
      )}
    </div>
  );
};

const Dashboard = ({ kpis, salesData }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">농심 새우깡 판매 대시보드</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <KPICard title="총 판매량" value={kpis.totalSales} unit="개" />
      <KPICard title="평균 주문 가치" value={kpis.averageOrderValue} unit="원" />
      <KPICard title="전환율" value={kpis.conversionRate} unit="%" />
      <KPICard title="고객 유지율" value={kpis.customerRetentionRate} unit="%" />
    </div>
    <FileUpload />
    <ChatbotInput />
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">일별 판매량 추이</h2>
      <SalesChart data={salesData} />
    </div>
  </div>
);

export default Dashboard;