import { useState } from 'react'
import './App.css'
import Article from './pages/Articles'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article" element={<Article />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
