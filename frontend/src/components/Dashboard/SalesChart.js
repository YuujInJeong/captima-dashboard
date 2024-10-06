
// components/Dashboard/SalesChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" name="판매량" stroke="#3b82f6" strokeWidth={2} />
      <Line type="monotone" dataKey="target" name="목표" stroke="#10b981" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default SalesChart;