import React, { useState } from 'react';
import '../styles/skills.css';

const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="skills" className="skills-section">
      <h2>기술 스택</h2>
      <div className="skills-image">
        {[
          { name: 'Java', logo: 'java', color: '007396' },
          { name: 'Python', logo: 'python', color: '3776AB' },
          { name: 'MySQL', logo: 'mysql', color: '4479A1' },
          { name: 'MongoDB', logo: 'mongodb', color: '47A248' },
          { name: 'Apache Tomcat', logo: 'apachetomcat', color: 'F8DC75' },
          { name: 'Spring', logo: 'spring', color: '6DB33F' },
          { name: 'Spring Boot', logo: 'springboot', color: '6DB33F' },
          { name: 'Flask', logo: 'flask', color: '000000' },
          { name: 'Illustrator', logo: 'adobeillustrator', color: 'FF9A00' },
          { name: 'Photoshop', logo: 'adobephotoshop', color: '31A8FF' }
        ].map((tech) => (
          <img
            key={tech.name}
            src={`https://img.shields.io/badge/${tech.logo}-${tech.color}?style=for-the-badge&logo=${tech.logo}&logoColor=white`}
            alt={`${tech.name} Badge`}
          />
        ))}
      </div>
      <div className="header-wrapper">
        <div className="skills-intro">
          학부 과정에서 자바, 파이썬, MySQL, MongoDB, 톰캣, 스프링, 스프링부트, 플라스크 등을 활용한 프로젝트를 통해 실무 기술 역량을 쌓았습니다.
        </div>
        <div className="content-toggle" onClick={toggleContent}>
          <span>상세 내용 {isExpanded ? '접기' : '펼치기'}</span>
          <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
        </div>
      </div>
      {isExpanded && (
        <div className="content">
          <div className="content-section">
            <h3>1. 자바와 스프링</h3>
            <p>
              자바와 스프링을 이용해 RESTful API 개발과 계층적 설계를 구현하며 최신 Java 17과 Gradle을 활용해 효율성을 높였습니다.
            </p>
          </div>

          <div className="content-section">
            <h3>2. 파이썬과 플라스크</h3>
            <p>
              Flask를 통해 GPT 기반 데이터 분석 API 서버를 구축하고 MongoDB에 데이터를 저장하며 비동기 처리와 데이터 분류를 구현했습니다.
            </p>
          </div>

          <div className="content-section">
            <h3>3. 데이터베이스</h3>
            <p>
              MySQL과 MongoDB로 관계형 및 비관계형 데이터베이스 설계와 운영을 경험하며 데이터 모델링과 복잡한 쿼리를 다뤘습니다.
            </p>
          </div>

          <div className="content-section">
            <h3>4. 웹 서버와 배포</h3>
            <p>
              JSP와 톰캣을 활용해 웹 애플리케이션을 배포하고 서버의 성능 최적화와 작동 원리를 이해했습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;