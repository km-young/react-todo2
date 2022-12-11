
import './App.css';
import styled from 'styled-components'
import Router from './shared/Router';
import { useSelector } from 'react-redux';


const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

function App() {
  
  return <Router />
}    

export default App;
