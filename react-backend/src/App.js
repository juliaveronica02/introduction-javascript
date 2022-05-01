import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import MapelList from './pages/get-delete'
import CreateMapel from './pages/create'
import EditMapel from './pages/edit'
import Home from './pages/home'

function App () {
  // UI navbar.
  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <nav className='btn btn-warning navbar navbar-expand-lg navheader'>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to={'/CreateMapel'} className="nav-link">Create Mapel</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/MapelList'} className="nav-link">Mapel List</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/Home'} className="nav-link">Home</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Routes>
            <Route exact path='CreateMapel' element={<CreateMapel/>}  />
            <Route exact path='MapelList' element={<MapelList/>}  />
            <Route exact path='EditMapel/:id' element={<EditMapel/>}  />
            <Route exact path='Home' element={<Home/>}  />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App