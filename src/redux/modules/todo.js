const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const GET_TODO_ID = 'GET_TODO_ID'

export const addTodo = (payload) => {
  return {type: ADD_TODO, payload};
};

export const deleteTodo = (payload) => {
  return {type: DELETE_TODO, payload};
};

export const toggleTodo = (payload) => {
  return {type: TOGGLE_TODO, payload};
};

export const getTodoId = (payload) => {
  return {type: GET_TODO_ID, payload};
};

const initialState = {
  todos:[
    {
      id: 1,
      title: '리액트 강의보기',
      body: '챕터 1부터 챕터 12까지 학습',
      isDone: false,
    },
    {
      id: 2,
      title: '점심 먹기',
      body: '점심 뭐먹지..?',
      isDone: false,
    },
  ]
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todos;