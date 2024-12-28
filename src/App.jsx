import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home";
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Router>
        <main className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Home/>
          
          <Routes>
            <Route path="/" element={<div>Home</div>}/>  
          </Routes>

          {/* Footer */}
          <Footer /> 
          
        </main>
      </Router>
    </>
  )
}

export default App
