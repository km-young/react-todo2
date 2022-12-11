import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  const Content = styled.p`
    margin: 0 0 0 10px;
  `;

  const Footer = styled.div`
    height: 200px;
    width: 100%;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    background-color: #00509d;
    color: #fdc500;
    margin: 10px 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 3px solid #fdc500;
  `;

  return (
    <Footer>
      <Content>프로젝트 시작 날짜 : 22.12.10</Content>
      <Content>프로젝트 종료 날짜 : 미정</Content>
    </Footer>
  );
}
