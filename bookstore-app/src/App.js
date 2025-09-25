// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Book from './pages/Book';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />

      <main className="main-content">
      <Routes>
          {/* หน้าแรก - แสดงหนังสือแนะนำ */}
          <Route path="/" element={<HomePage />} />

          <Route path="/books" element={<Book />} />

          <Route path="/category/fiction" element={<Category />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />

      </Routes>
      </main>

      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
