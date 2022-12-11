import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TodoDetail from '../pages/TodoDetail'
import Layout from './Layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tododetail' element={<TodoDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}