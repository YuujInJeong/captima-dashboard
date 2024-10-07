import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <p className="text-center mb-4">
          <strong>본 웹사이트는 제3회 유통데이터 활용 경진대회, 2024 RETAIL DATA FESTA를 위해 제작되었습니다.</strong>
        </p>
        <p className="text-center mb-4">
          대한민국 유통 데이터를 기반으로 AI 및 IT 기술을 활용한 다양한 혁신 아이디어를 발굴하고자 합니다. 
          본 경진대회에 대한 자세한 사항은 공식 웹사이트와 문의처를 통해 확인하실 수 있습니다.
        </p>
        <p className="text-center">
          참가자 | 정유진 박수흠 이용연 이홍민&nbsp;&nbsp;&nbsp;연락처 | yujin010917@khu.ac.kr
        </p>
      </div>
    </footer>
  );
};

export default Footer;