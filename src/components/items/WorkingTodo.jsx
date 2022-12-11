import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';

export default function WorkingTodo() {

  return (
    <Todos>
      <Legend>Working</Legend>
      <TodoCard cardtitle='할일제목' cardcontent='할일내용'></TodoCard>
      <TodoCard cardtitle='할일제목' cardcontent='할일내용'></TodoCard>
      <TodoCard cardtitle='할일제목' cardcontent='할일내용'></TodoCard>
    </Todos>
  );
}
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