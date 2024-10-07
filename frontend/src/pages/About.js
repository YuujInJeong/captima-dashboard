import React from 'react';

const About = () => {
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