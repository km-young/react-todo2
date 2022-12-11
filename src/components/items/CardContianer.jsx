import React from 'react';
import styled from 'styled-components';
import DoneTodo from './DoneTodo';
import TodoCard from './TodoCard';
import WorkingTodo from './WorkingTodo';

export default function CardContianer() {
  const CardContainer = styled.div`

    margin-top: 20px;
  `;
  return (
    <CardContainer>
      <WorkingTodo>
      </WorkingTodo>
      <DoneTodo>
      </DoneTodo>
    </CardContainer>
  );
}
