import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import NotFound404 from './pages/NotFound404';
import Footer from './components/layout/Footer';

import './App.css'

function App() {

  useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

  return (
    <>
      <div className='min-h-screen w-full overflow-auto'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
          <Footer/>
      </div>
    </>
  )
}

export default App
