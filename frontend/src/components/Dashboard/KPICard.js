
// components/Dashboard/KPICard.js
import React from 'react';

const KPICard = ({ title, value, unit }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 transition duration-300 ease-in-out hover:shadow-md">
    <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">
      {typeof value === 'number' ? value.toLocaleString('ko-KR') : value}
      <span className="text-sm font-normal text-gray-500 ml-1">{unit}</span>
    </p>
  </div>
);

export default KPICard;
