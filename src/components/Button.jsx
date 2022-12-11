import React from 'react';
import styled from 'styled-components';

export default function Button({
  name,
  fontSize,
  padding,
  hoverbackground,
  activebackground,
  onClick,
}) {
  return (
    <ButtonBox
      fontSize={fontSize}
      padding={padding}
      hoverbackground={hoverbackground}
      activebackground={activebackground}
      onClick={onClick}
    >
      {name}
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  border: 3px solid #00509d;
  border-radius: 30px;
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  background-color: white;
  font-weight: 800;
  color: #00509d;

  &:hover {
    background-color: ${(props) => props.hoverbackground};
  }
  &:active {
    background-color: ${(props) => props.activebackground};
  }

  @media (max-width: 1081px) {
    padding: 5px 20px;
    font-size: 20px;
  }
`;
