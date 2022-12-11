import React from 'react';
import Header from '../components/header,footer/Header';
import Footer from '../components/header,footer/Footer';
import styled from 'styled-components';

export default function Layout({ children }) {
  const Container = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 10px auto;
    font-family: 'Noto Sans KR', sans-serif;
  `;
  return (
    <Container>
      <Header />
      <div>{children}</div>
      <Footer />
    </Container>
  );
}