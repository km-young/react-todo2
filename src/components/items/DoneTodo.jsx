import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoCard from './TodoCard';

export default function DoneTodo() {
  const { todos } = useSelector((state) => state.todos);
  return (
    <TodosBox>
      <LegendBox>Done</LegendBox>
      {todos.map((todos) => (
        <TodoCard
          key={todos.id}>
          {todos.title}
          {todos.body}
        </TodoCard>
      ))}

      <TodoCard cardtitle='완료한일제목' cardcontent='완료한일내용'></TodoCard>
    </TodosBox>
  );
}
const TodosBox = styled.fieldset`
  width: 97%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-top: 20px;
  border: 5px solid #00509d;
  gap: 10px;
`;

const LegendBox = styled.legend`
  color: #fdc500;
  font-size: 50px;
  font-weight: 800;
`;