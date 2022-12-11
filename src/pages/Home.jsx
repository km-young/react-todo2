import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import styled from 'styled-components';
import AddTodo from '../components/AddTodo';
import CardContianer from '../components/items/CardContianer';


export default function Home() {
  
  const navigate = useNavigate();
  return (
    <div>
      <AddTodo></AddTodo>
      <CardContianer></CardContianer>
    </div>
  );
}
