import React from 'react';
import styled from 'styled-components';

export default function Header() {

  const Header = styled.div`
    height: 100px;
    width: 100%;
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    font-weight: 800;
    background-color: #00509d;
    color: #fdc500;
    border-radius: 50px;
    margin: 10px 0;
    border: 3px solid #fdc500;
  `;
  return (
    <Header>
      오늘 할 일을 내일로 미루지 마라.
    </Header>
  );
}