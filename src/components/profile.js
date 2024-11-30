import React, { useState } from 'react';
import '../styles/profile.css';

const Profile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="profile" className="profile-section">
      <h2>About Me</h2>
      <div className="header-wrapper">
        <div className="quote">
          "다양한 경험으로 넓힌 시야로 개발의 재미를 발견하여 긍정 에너지로 살아가는 유쾌한 예비 개발자입니다."
        </div>
        <div className="content-toggle" onClick={toggleContent}>
          <span>상세 내용 {isExpanded ? '접기' : '펼치기'}</span>
          <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
        </div>
      </div>
      {isExpanded && (
        <div className="content">
          <h3>🌎 글로벌 경험</h3>
          <p>
            안녕하세요, 저는 다양한 경험과 도전을 통해 자신만의 길을 찾아가고 있는 예비 개발자입니다. 싱가포르에서 6년간 공부하며 글로벌한 시야를 키웠고, 호주에서는 대학교 경영학과 1학년까지 다니며 학업을 이어갔습니다.
          </p>

          <h3>💼 다양한 업무 경험</h3>
          <p>
            힐튼 호텔 하우스 키핑과 애플 스토어 업무 보조를 미술관 1스타 이탈리안 레스토랑 주방 보조로 일하며 다양한 현장에서 책임감을 배우고 성실함을 다졌습니다. 한국으로 돌아와서는 홈플러스에서 공군 운전병으로 복무하며 그 생활을 마쳤고, 이후에는 진로 탐색 과정에서 카페 아르바이트, 모바일 방송 송출 업무, 스타트업 기업의 해외 마케팅 및 통역과 계약 지원, 그리고 성인 대상의 공인 영어 시험 및 회화 강의를 진행하며 다채로운 업무 경험을 쌓았습니다.
          </p>

          <h3>💻 개발자로의 도전</h3>
          <p>
            그렇게 다양한 경험을 통해 자신을 돌아보던 중, 개발이라는 분야에 흥미를 느끼게 되었고 만화도를 자처하며 본격적으로 새로운 길에 도전하게 되었습니다. 처음에는 공부와 적성이 어려워 '이 길이 과연 나에게 맞는가?'라는 고민도 했지만, 점차 개발에 대한 흥미와 적성을 발견하면서 자신감을 얻었습니다.
          </p>

          <h3>🎯 미래 목표</h3>
          <p>
            지금은 그동안 쌓아온 경험들을 바탕으로 개발자로서 성장하기 위한 준비를 열심히 하고 있습니다. 여러 환경에서 배우고 익힌 책임감, 문제 해결 능력, 그리고 끊임없이 도전하는 자세가 저의 강점입니다. 앞으로도 긍정적인 에너지와 열정을 바탕으로, 창의적이고 의미 있는 결과를 만들어가는 개발자가 되고 싶습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;