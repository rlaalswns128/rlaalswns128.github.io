import React from 'react';
import '../styles/info.css';

const Info = () => {
  const email = 'rlaalswns128@gmail.com';

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          alert('이메일 주소가 복사되었습니다: ' + email);
        })
        .catch(err => {
          console.error('이메일 복사 실패:', err);
        });
    } else {
      alert('클립보드 복사를 지원하지 않는 브라우저입니다.');
    }
  };

  return (
    <div id="info" className="info-section">
      <h2>Let's Connect!</h2>
      <p className="email">{email}</p>
      <button className="copy-email" onClick={handleCopyEmail}>
        Copy E-Mail
      </button>

      <div className="social-icons">
        {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* <a href="https://codesandbox.io" target="_blank" rel="noopener noreferrer">CodeSandbox</a> */}
      </div>
    </div>
  );
};

export default Info;