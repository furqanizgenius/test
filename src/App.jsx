import React from 'react'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="#" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
