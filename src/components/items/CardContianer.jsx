import React from 'react';
import styled from 'styled-components';
import DoneTodo from './DoneTodo';
import TodoCard from './TodoCard';
import WorkingTodo from './WorkingTodo';

export default function CardContianer() {
  
  return (
    <CardContainerBox>
      <WorkingTodo>
      </WorkingTodo>
      <DoneTodo>
      </DoneTodo>
    </CardContainerBox>
  );
}
const CardContainerBox = styled.div`
  margin-top: 20px;
`;
