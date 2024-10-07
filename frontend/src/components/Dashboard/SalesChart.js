import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const calculateMovingAverage = (data, days) => {
  return data.map((item, index, array) => {
    if (index < days - 1) return { ...item, [`MA${days}`]: null };
    const slice = array.slice(index - days + 1, index + 1);
    const sum = slice.reduce((acc, curr) => acc + curr.sales, 0);
    return { ...item, [`MA${days}`]: sum / days };
  });
};

const SalesChart = ({ data }) => {
  const [showMA180, setShowMA180] = useState(false);
  const [showMA60, setShowMA60] = useState(false);

  const processedData = useMemo(() => {
    let result = data;
    if (showMA180) result = calculateMovingAverage(result, 180);
    if (showMA60) result = calculateMovingAverage(result, 60);
    return result;
  }, [data, showMA180, showMA60]);

  return (
    <div>
      <div className="mb-4">
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            className="form-checkbox text-blue-600"
            checked={showMA180}
            onChange={(e) => setShowMA180(e.target.checked)}
          />
          <span className="ml-2">180일 이동평균</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-green-600"
            checked={showMA60}
            onChange={(e) => setShowMA60(e.target.checked)}
          />
          <span className="ml-2">60일 이동평균</span>
        </label>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" name="판매량" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="target" name="목표" stroke="#10b981" strokeWidth={2} />
          {showMA180 && (
            <Line type="monotone" dataKey="MA180" name="180일 이동평균" stroke="#6366f1" strokeWidth={2} strokeDasharray="5 5" />
          )}
          {showMA60 && (
            <Line type="monotone" dataKey="MA60" name="60일 이동평균" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;