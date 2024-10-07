import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 감사합니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">문의하기</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>  
        <h2 className="text-2xl font-semibold mb-4">연락처 정보</h2>
        <p className="mb-2">
          <strong>이메일:</strong> yujin010917@khu.ac.kr
        </p>  
        <p className="mb-4">
          <strong>주소:</strong> 서울특별시 동대문구 경희대로 26 경희대학교
        </p>
        <h3 className="text-xl font-semibold mb-2">대회 정보</h3>
        <p className="mb-2">
         제3회 유통데이터 활용 경진대회, 2024 RETAIL DATA FESTA
        </p>
        <p>
          자세한 정보는 <a href="https://www.instagram.com/captima_official" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">공식 Instagram</a>을 참조하세요.
        </p>
      </section>
      
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">문의 양식</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">문의 내용</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border rounded"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              제출하기
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;