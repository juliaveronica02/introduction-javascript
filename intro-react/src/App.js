import * as React from 'react'
import Navbar from './component/navbar'
import HOME from "./pages/home"
import ABOUT from './pages/about'
import Portfolio from './pages/portfolio'
import './assets/style.css'
// router -> simpan UI yang sudah di sinkron dengan URL
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

// functional component
const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Router>
    {/* <div className='container'>
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
        </div> */}
        <Navbar/>
        {/* footer */}
        <div className='pt-5'>
        <Switch>
                <Route exact path="/" component={HOME} /> 
                <Route path="/about" component={ABOUT} /> 
                <Route path="/portfolio" component={Portfolio} /> 
                {/* <Route exact path="/" element={<HOME />} />  */}
                {/* <Route path="/about" element={<ABOUT />} />  */}
                {/* <Route path="/portfolio" element={<Portfolio />} />  */}
                </Switch>
                </div>
    </Router>
    </BrowserRouter>
    </div>
  )
}

export default App;