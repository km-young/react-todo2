import React from 'react';
import styled from 'styled-components';

export default function Input() {
  const Input = styled.input`
    width: 300px;
    height: 27px;
    border: 2px solid #fdc500;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #00509d;
    color: #fdc500;
    font-weight: 600;
    margin: 0 30px 0 10px;
    &:focus {
      background-color: #00296b;
      outline: #ffd500;
    }

    @media (max-width: 1081px) {
      width: 200px;
      height: 20px;
      font-size: 15px;
    }
  `;
  return <Input type='text' />;
}
