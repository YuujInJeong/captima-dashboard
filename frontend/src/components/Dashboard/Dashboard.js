import React, { useState, useRef, useCallback } from 'react';
import { calculateKPIs, generateMockData } from '../../utils/dataUtils';
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
      alert(`파일 "${file.name}"이 업로드되었습니다. (실제 업로드는 구현되지 않았습니다)`);
      setFile(null);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">파일 업로드</h2>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">업로드</button>
      </form>
    </div>
  );
};


const SalesChart = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const chartRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowPopup(false);
  }, []);

  const handleCopyToClipboard = useCallback(() => {
    const text = `아직 챗봇은 연결되지 않았습니다. 하단은 예시 답변입니다.

2024년 9월 농심 새우깡의 판매량이 전월 대비 37% 증가한 주요 요인 분석:

1. 신규 마케팅 캠페인 효과:
   - '추억의 맛' 컨셉의 TV 광고 론칭 (9월 1일)
   - 광고 효과: 첫 주 판매량 22% 증가, 브랜드 검색량 56% 상승

2. SNS 밈 현상:
   - 인기 유튜버 '먹방스타' 새우깡 챌린지 영상 viral (9월 10일)
   - 관련 해시태그 사용 건수: 150만 건 돌파
   - 20대 구매자 비율 15%p 증가

3. 건강 스낵 트렌드 부합:
   - 새우깡 '30% 더 가볍게' 리뉴얼 제품 출시 (8월 말)
   - 칼로리 20% 감소, 단백질 함량 10% 증가
   - 헬스 커뮤니티에서 긍정적 리뷰 다수 (평점 4.5/5)

4. 대규모 프로모션 진행:
   - 주요 편의점 체인과 1+1 프로모션 (9월 15일-30일)
   - 온라인 쇼핑몰 '깜짝 세일' 3시간 동안 50% 할인 (9월 20일)
   - 프로모션 기간 동안 일 평균 판매량 2.5배 증가

5. 경쟁사 대비 우위:
   - 주 경쟁사 P사의 생산라인 일시 중단 (9월 5일-12일)
   - 새우깡의 시장 점유율 5%p 상승 (35% → 40%)

6. 계절적 요인:
   - 9월 추석 명절 선물세트 판매 호조 (전년 대비 18% 증가)
   - 가을 나들이 시즌과 맞물린 포장 스낵 수요 증가

7. 원재료 가격 안정화:
   - 주 원료인 새우 가격 10% 하락으로 이익률 개선
   - 가격 경쟁력 확보로 대형마트 입점 물량 15% 확대

결론: 9월의 판매량 급증은 전략적 마케팅, 제품 혁신, 외부 환경 변화, 그리고 시의적절한 프로모션의 시너지 효과로 분석됩니다. 특히 SNS를 통한 바이럴 마케팅과 건강 트렌드에 부합한 제품 리뉴얼이 젊은 층의 새로운 수요를 창출한 것으로 보입니다.`;

    navigator.clipboard.writeText(text).then(() => {
      alert('상세 분석 내용이 클립보드에 복사되었습니다.');
    }, (err) => {
      console.error('클립보드 복사 실패: ', err);
    });
  }, []);

  return (
    <div className="relative" ref={chartRef}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart 
          data={data}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
        <div 
          className="absolute bg-white border border-gray-200 rounded-md shadow-lg p-4 z-10"
          style={{ right: '10px', top: '10px', maxWidth: '300px' }}
        >
          <p className="text-sm text-gray-500 mb-2">아직 챗봇은 연결되지 않았습니다. 하단은 예시 답변입니다.</p>
          <p className="text-sm font-medium mb-2">"2024년 9월 농심 새우깡의 판매량이 급격히 증가한 것은..."</p>
          <button 
            onClick={handleCopyToClipboard}
            className="mt-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"
          >
            전체 텍스트 복사
          </button>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const salesData = generateMockData();
  const kpis = calculateKPIs(salesData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">농심 새우깡 판매 대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard title="총 판매량" value={kpis.totalSales} unit="개" />
        <KPICard title="평균 주문 가치" value={kpis.averageOrderValue} unit="원" />
        <KPICard title="목표 달성률" value={kpis.targetAchievementRate.toFixed(2)} unit="%" />
        <KPICard title="일평균 판매량" value={kpis.averageDailySales} unit="개" />
      </div>
      <FileUpload />
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">일별 판매량 추이</h2>
        <SalesChart data={salesData} />
      </div>
    </div>
  );
};

export default Dashboard;