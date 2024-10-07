import React, { useState } from 'react';

const About = () => {
  const [hoverText, setHoverText] = useState('');

  const handleMouseOver = () => {
    setHoverText('아직 챗봇은 연결되지 않았습니다. 하단은 예시 답변입니다. "2024년 9월 ~ (예시답변)"');
  };

  const handleMouseOut = () => {
    setHoverText('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hoverText);
    alert('예시 답변이 클립보드에 복사되었습니다!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">점쟁이 - 유통데이터 분석 대시보드</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">프로젝트 소개</h2>
        <p className="mb-4">
          '점쟁이'는 제3회 유통데이터 활용 경진대회, 2024 RETAIL DATA FESTA를 위해 개발된 혁신적인 유통데이터 분석 대시보드입니다. 
          우리의 목표는 대한민국 유통 데이터를 AI 및 IT 기술과 결합하여 소매업계에 혁신적인 인사이트를 제공하는 것입니다.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
        <ul className="list-disc list-inside">
          <li>실시간 판매 데이터 모니터링</li>
          <li>AI 기반 판매 예측</li>
          <li>다양한 KPI 지표 분석</li>
          <li>맞춤형 리포트 생성</li>
          <li>데이터 시각화 대시보드</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">챗봇 기능 (예정)</h2>
        <p className="mb-4">
          그래프 상에 마우스를 올리면, 해당 데이터에 대한 설명을 제공하는 챗봇 기능이 예정되어 있습니다. 현재는 연결되지 않았으나, 예시 답변을 확인할 수 있습니다.
        </p>
        <div 
          className="bg-gray-100 p-4 rounded mb-4" 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}
        >
          <p>{hoverText ? hoverText : '그래프에 마우스를 올리세요'}</p>
        </div>
        {hoverText && (
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded" 
            onClick={copyToClipboard}
          >
            예시 답변 클립보드에 복사
          </button>
        )}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">팀 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['정유진', '박수흠', '이용연', '이홍민'].map((member, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">{member}</h3>
              <p className="text-sm text-gray-600">팀 멤버</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
        <div className="flex flex-wrap gap-2">
          {['React', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express', 'MongoDB'].map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
