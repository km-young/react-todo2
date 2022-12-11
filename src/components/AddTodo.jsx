import React, {useState} from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../redux/modules/todo';

export default function AddTodo() {


  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos",todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    console.log("title",title)
    if (title === '' || body === '') {
      alert('제목과 내용을 입력해주세요.');
      return;
    } else {
      dispatch(
        // todo를 add하는 action 일으키기
        addTodo({
          id: todos.length + 1,
          title: title,
          body: body,
          isDone: false,
        })
      );
    }
  };

  return (
    <AddTodoBox>
      <span>제목</span>{' '}
      <Input
        type='text'
        value={title}
        onChange={(e) => {
          console.log("e.target.value",e.target.value)
          setTitle(e.target.value);
        }}
      />
      <span>내용</span>{' '}
      <Input
        type='text'
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <Button
        name='추가하기'
        fontSize='25px'
        padding='5px 40px'
        hoverbackground='#ffd500'
        activebackground='#fdc500'
        onClick={onSubmitHandler}
      ></Button>
    </AddTodoBox>
  );
}
  const AddTodoBox = styled.div`
    height: 70px;
    line-height: 100px;
    border-radius: 50px;
    border: 3px solid #00509d;
    margin-top: 50px;
    padding: 0 30px;
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1100px) {
      padding: 0 10px;
    }
  `;