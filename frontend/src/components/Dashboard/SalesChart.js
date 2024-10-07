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
    <div className="bg-white p-4 rounded-lg shadow relative">
      <h2 className="text-xl font-bold mb-4">판매 추이</h2>
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          className={`px-3 py-1 text-sm rounded-full ${
            showMA30 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setShowMA30(!showMA30)}
        >
          30일 평균
        </button>
        <button
          className={`px-3 py-1 text-sm rounded-full ${
            showMA60 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setShowMA60(!showMA60)}
        >
          60일 평균
        </button>
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