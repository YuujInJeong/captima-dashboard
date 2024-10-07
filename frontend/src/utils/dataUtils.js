// src/utils/dataUtils.js

export const calculateKPIs = (data) => {
  const totalSales = data.reduce((sum, day) => sum + day.sales, 0);
  const totalDays = data.length;
  const totalTarget = data.reduce((sum, day) => sum + day.target, 0);

  return {
    totalSales,
    averageOrderValue: Math.round(totalSales / totalDays),
    targetAchievementRate: (totalSales / totalTarget) * 100,
    averageDailySales: Math.round(totalSales / totalDays)
  };
};

export const generateMockData = () => {
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-09-30');
  const data = [];
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const sales = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
    const target = 7500;
    data.push({
      date: currentDate.toISOString().split('T')[0],
      sales: sales,
      target: target
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};