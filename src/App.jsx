import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { Router, Route, Routes, BrowserRouter, Link } from 'react-router-dom'

function App() {
return (
  <>
    <Router>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="#" element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  </>
)
}

export default App
