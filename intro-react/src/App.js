import * as React from 'react'
import HOME from "./pages/home"
import ABOUT from './pages/about'
import Portfolio from './pages/portfolio'
import './assets/style.css'
// router -> simpan UI yang sudah di sinkron dengan URL
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

// functional component
const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
    <div className='container'>
            <div className='logo'>
                <img className='pic' src="https://s4.bukalapak.com/img/457590103/s-400-400/41KTjPYe3yL.jpg" alt='test' />
            </div>
            <div className='bg-color'>
                <ul className='ul'>
                    <li className='li'> <Link className='active' to="/"> HOME </Link></li>
                    <li className='li'> <Link to="/about"> ABOUT </Link></li>
                    <li className='li'> <Link to="/portfolio"> PORTFOLIO </Link></li>
                </ul>
            </div>
        </div>
                <Route exact path="/" element={<HOME />} /> 
                <Route path="/about" element={<ABOUT />} /> 
                <Route path="/portfolio" element={<Portfolio />} /> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;