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
  
  // 필요에 따라 다른 유틸리티 함수들을 여기에 추가할 수 있습니다.