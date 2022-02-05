import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Company from './pages/Company';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Header from './components/layout/Header/Header';
import Wrapper from './components/layout/Wrapper/Wrapper';

function App() {
  return (
    <>
      <Header />
      <Wrapper layout="">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="order" element={<Order/>}/>
          <Route path="company" element={<Company />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
