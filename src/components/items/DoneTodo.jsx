import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';

export default function DoneTodo() {
  const Todos = styled.fieldset`
    width: 97%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    margin-top: 20px;
    border: 5px solid #00509d;
    gap: 10px;
  `;

  const Legend = styled.legend`
    color: #fdc500;
    font-size: 50px;
    font-weight: 800;
  `;
  return (
    <Todos>
      <Legend>Done</Legend>
      <TodoCard cardtitle='완료한일제목' cardcontent='완료한일내용'></TodoCard>
      <TodoCard cardtitle='완료한일제목' cardcontent='완료한일내용'></TodoCard>
    </Todos>
  );
}