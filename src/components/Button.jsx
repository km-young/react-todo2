import React from 'react';
import styled from 'styled-components';


export default function Button({name, fontSize, padding, hoverbackground, activebackground}) {
  const Button = styled.button`
    border: 3px solid #00509d;
    border-radius: 30px;
    font-size: ${fontSize};
    padding: ${padding};
    background-color: white;
    font-weight: 800;
    color: #00509d;

    &:hover {
      background-color: ${hoverbackground};
    }
    &:active {
      background-color: ${activebackground};
    }

    @media (max-width: 1081px) {
      padding: 5px 20px;
      font-size: 20px;
    }
  `;
  return <Button>{name}</Button>
}
