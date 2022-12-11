import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

export default function TodoCard({cardtitle, cardcontent}) {
  const TodoCard = styled.div`
    width: 30%;
    border: 3px solid #fdc500;
    border-radius: 20px;
    background-color: #00509d;
    color: #fdc500;
    padding: 10px;

    &:hover {
      background-color: #fdc500;
      color: #00509d;
      border-color: #00509d;
    }
  `;
  return (
    <TodoCard>
      <p style={{fontSize: 25, fontWeight: 800}}>{cardtitle}</p>
      <p style={{fontSize: 20, fontWeight: 600}}>{cardcontent}</p>
      <Button
        name='완료'
        fontSize='15px'
        padding='5px 10px'
        hoverbackground='#91d6b7'
        activebackground='#7fbda1'
      ></Button>
      <Button
        name='삭제'
        fontSize='15px'
        padding='5px 10px'
        hoverbackground='#ff7272'
        activebackground='#cb5e5e'
      ></Button>
    </TodoCard>
  );
}
